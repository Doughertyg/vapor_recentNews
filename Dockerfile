#use a light weight node image and exact version
FROM node:12.3.1-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3003

CMD ["npm", "start"]