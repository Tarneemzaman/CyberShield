# Running with Docker (development)

This project includes Dockerfiles for the backend and frontend plus a docker-compose.yml that starts a MySQL database, the Django backend, and an nginx-based static frontend.

1. Copy the example .env and set any required variables:

```bash
cp backend/.env.example .env
# Edit .env to set SECRET_KEY, DB_* vars or create a top-level .env
```

2. Build and start the stack:

```bash
docker-compose up --build
```

- Backend will be available at http://127.0.0.1:8000/
- Frontend will be served at http://127.0.0.1:8080/

Notes
- The compose setup runs migrations on container start. The backend image installs system packages needed to build the MySQL client. If you'd prefer a lighter image, consider using pymysql or a multi-stage build.
