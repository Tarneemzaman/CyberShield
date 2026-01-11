# Backend (Django)

This is a minimal Django project configured to connect to a MySQL database using environment variables.

Environment variables (.env)
- SECRET_KEY: Django secret key
- DEBUG: 0 or 1
- DB_NAME: MySQL database name
- DB_USER: MySQL username
- DB_PASSWORD: MySQL password
- DB_HOST: MySQL host (default: localhost)
- DB_PORT: MySQL port (default: 3306)

Run locally (after installing requirements and setting env vars):

```bash
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
