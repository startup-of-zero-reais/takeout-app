FROM node:14.16.1-alpine

WORKDIR /app

RUN apk add --update yarn

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]