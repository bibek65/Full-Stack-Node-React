FROM node:20.11 AS backend

WORKDIR /app/backend
COPY package*.json ./
RUN yarn

COPY . .

ENV NODE_ENV=local

EXPOSE 5001

CMD ["yarn", "start"]
