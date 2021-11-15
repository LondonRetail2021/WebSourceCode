FROM node:12-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm init -y
RUN npm install --save express
COPY . /app
CMD npm start
