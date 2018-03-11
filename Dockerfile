FROM node:carbon

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
RUN npm install forever nodemon -g

RUN npm install
EXPOSE 4000

CMD npm run start:dev
