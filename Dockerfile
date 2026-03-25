FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
CMD ["node", "app.js"]
