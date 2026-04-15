# Stage 1: Build (if needed)
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Minimal runtime
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY app.js ./

CMD ["node", "app.js"]