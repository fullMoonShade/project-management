# Use slim Python image for minimal footprint
FROM python:3.12.9-slim

# Set working directory
WORKDIR /usr/src/django_backend

# Set environment variables to prevent .pyc files and enable buffered output
ENV PYTHONBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libffi-dev \
    python3-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Create a virtual environment and install dependencies
RUN python -m venv env
ENV PATH="/usr/src/django_backend/env/bin:$PATH"

# Copy dependencies first (for better caching)
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the application files
COPY . .

# Expose port 8000
EXPOSE 8000

