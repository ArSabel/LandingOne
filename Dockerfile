# Usar la imagen ligera de Nginx basada en Alpine
FROM nginx:alpine

# Copiar los archivos estáticos de la landing al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto estándar de HTTP
EXPOSE 80

# Nginx inicia automáticamente por defecto en la imagen de base
CMD ["nginx", "-g", "daemon off;"]
