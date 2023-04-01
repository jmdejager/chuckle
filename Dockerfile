#build stage
FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build:prod

#app container
FROM nginx:alpine
COPY --from=build /app/dist/chuckle /usr/share/nginx/html
