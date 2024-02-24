FROM postgres:latest AS database

ENV POSTGRES_DB=todo
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=root

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
