FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1

# Install system deps for MySQL client build
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    default-libmysqlclient-dev \
    gcc \
    libssl-dev \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY backend/requirements.txt /app/requirements.txt
RUN pip install --upgrade pip && pip install -r /app/requirements.txt

# Copy project
COPY backend/ /app/

# Expose port
EXPOSE 8000

# Default command: run migrations then start gunicorn
CMD ["bash","-lc","python manage.py migrate --noinput && gunicorn cybershield.wsgi:application --bind 0.0.0.0:8000 --workers 3"]
