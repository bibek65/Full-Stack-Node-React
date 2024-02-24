#!/bin/bash

# Define the root directory
ROOT_DIR="/c/Users/DELL/Desktop/Full Stack"

# Start the frontend container
docker run -d -p 3000:3000 -v "$ROOT_DIR/frontend:/app/frontend" --name frontend frontend

# Start the PostgreSQL container
docker run -d -p 5432:5432 -v "$ROOT_DIR/postgresql:/var/lib/postgresql/data" --name postgres postgres

# Start the backend container
docker run -d -p 5001:5001 -v "$ROOT_DIR/backend:/app/backend" --name backend backend

echo "Containers started successfully."

