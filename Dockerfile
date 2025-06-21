# docker-compose up -d
# docker-compose down
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80 