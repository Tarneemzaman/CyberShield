# CyberShield

Monorepo with a plain HTML/CSS/JS frontend and a Python Django backend configured for MySQL.

Quick start

Frontend (static)
- Open `frontend/index.html` in a browser or serve the `frontend/` folder with a static server.

Backend (Django)
Prerequisites: Python 3.10+, MySQL server, and virtualenv.

1. Create and activate a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate  # macOS / Linux
.\.venv\Scripts\activate   # Windows (PowerShell)
```

2. Install dependencies:

```bash
pip install -r backend/requirements.txt
```

3. Copy `.env.example` to `.env` and fill in values (DB credentials, SECRET_KEY).

4. Run migrations and create a superuser:

```bash
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

5. The admin interface will be available at `http://127.0.0.1:8000/admin/` and the example API at `http://127.0.0.1:8000/api/items/`.

Notes
- Settings read database credentials from environment variables so you can connect to MySQL.
- This scaffold is minimal — add apps, tests, CI, and Docker as needed.
