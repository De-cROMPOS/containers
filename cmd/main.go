package main

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/mail"
	"net/smtp"
	"os"
	"unicode/utf8"

	"github.com/joho/godotenv"
	"golang.org/x/text/encoding/charmap"
)

// Тут вроде валидация на стороне фронта
type MailRequest struct {
	PhoneNumber string `json:"phonenumber"`
	Name        string `json:"name"`
	Mail        string `json:"mail"`
	Comment     string `json:"comment"`
}

var (
	smtpHost     = "smtp.gmail.com"          // SMTP-сервер
	smtpPort     = "587"                     // Порт (587 для STARTTLS)
	smtpUsername = GetEnv("MY_MAIL", "")     // Ваш email
	smtpPassword = GetEnv("PSWD", "")        // Пароль приложения
	targetEmail  = GetEnv("TARGET_MAIL", "") // Куда отправлять (ваш email)
)

func withCORS(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		h(w, r)
	}
}

func mailPoster(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Wrong method", http.StatusMethodNotAllowed)
		return
	}

 bodyBytes, err := io.ReadAll(r.Body)
    if err != nil {
        http.Error(w, "Ошибка чтения тела запроса", http.StatusBadRequest)
        return
    }

    var utf8Bytes []byte
    if utf8.Valid(bodyBytes) { // Utf- 8
        utf8Bytes = bodyBytes
    } else { // Если Windows-1251
        decoder := charmap.Windows1251.NewDecoder()
        utf8Bytes, err = decoder.Bytes(bodyBytes)
        if err != nil {
            http.Error(w, "Ошибка декодирования текста", http.StatusBadRequest)
            return
        }
    }

	var req MailRequest
	if err := json.Unmarshal(utf8Bytes, &req); err != nil {
		http.Error(w, "JSON не анмаршнулся: "+err.Error(), http.StatusBadRequest)
		return
	}

	body := fmt.Sprintf(`
		Имя: %s
		Телефон: %s
		Email: %s
		Комментарий: %s
		`, req.Name, req.PhoneNumber, req.Mail, req.Comment)

	subject := "Новый заказ"
	if err := sendEmail(subject, body); err != nil {
		http.Error(w, "В общем то ошибка пока отправляли посылку:(\n"+err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, `{"status": "success"}`)
}

func sendEmail(subject, body string) error {
	from := mail.Address{Name: "Уведомлялка", Address: smtpUsername}
	to := mail.Address{Address: targetEmail}

	msg := fmt.Sprintf(
		"From: %s\r\n"+
			"To: %s\r\n"+
			"Subject: =?UTF-8?B?%s?=\r\n"+
			"Content-Type: text/plain; charset=UTF-8\r\n"+
			"\r\n"+
			"%s",
		from.String(),
		to.String(),
		base64.StdEncoding.EncodeToString([]byte(subject)),
		body,
	)

	auth := smtp.PlainAuth("", smtpUsername, smtpPassword, smtpHost)
	return smtp.SendMail(
		smtpHost+":"+smtpPort,
		auth,
		from.Address,
		[]string{to.Address},
		[]byte(msg),
	)
}

func main() {
	http.HandleFunc("/send-mail", withCORS(mailPoster))
	log.Println("Полетели на :8088")
	log.Fatal(http.ListenAndServe(":8088", nil))
}

func GetEnv(key string, defaultValue string) string {
	_ = godotenv.Load()
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}
