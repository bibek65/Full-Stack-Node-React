FROM node:20.11 AS frontend

WORKDIR /app/frontend

COPY package*.json ./

RUN yarn
COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
