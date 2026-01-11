FROM nginx:alpine
COPY frontend/ /usr/share/nginx/html

# Remove default nginx index if present
RUN rm -f /usr/share/nginx/html/index.html || true

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
