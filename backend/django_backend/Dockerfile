FROM python:3.12.9-slim

WORKDIR /usr/src/django_backend

# Set environment variables to prevent .pyc files and enable buffered output
ENV PYTHONBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Install necessary dependencies for Python packages
RUN apt-get update && apt-get install -y \
    gcc \
    libffi-dev \
    python3-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy and install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the application files
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
