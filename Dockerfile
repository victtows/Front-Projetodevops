FROM nginx:latest


# Copia arquivos estáticos para o local padrão do Nginx
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/scripts.js

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
