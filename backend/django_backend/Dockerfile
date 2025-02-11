# Use slim Python image for minimal footprint
FROM python:3.12.9-slim

# Set working directory
WORKDIR /usr/src/django_backend

# Set environment variables to prevent .pyc files and enable buffered output
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Install necessary system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libffi-dev \
    python3-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy dependencies file first (optimized caching)
COPY requirements.txt .

# Create a virtual environment and install dependencies
RUN python3 -m venv env && \
    /usr/src/django_backend/env/Scripts/pip install --upgrade pip && \
    /usr/src/django_backend/env/Scripts/pip install -r requirements.txt

# Copy the rest of the application files
COPY . .

# Make the entrypoint script executable
# COPY entrypoint.sh .
# RUN chmod +x entrypoint.sh

# Set the entrypoint
# ENTRYPOINT ["./entrypoint.sh"]

# Expose port 8000 for Django
EXPOSE 8000