#!/bin/bash

# Stop and remove the frontend container
docker stop frontend
docker rm frontend

# Stop and remove the PostgreSQL container
docker stop postgres
docker rm postgres

# Stop and remove the backend container
docker stop backend
docker rm backend

echo "Containers stopped and removed successfully."
