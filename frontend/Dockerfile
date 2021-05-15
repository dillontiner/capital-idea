FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "/usr/local/bin/serve", "-s", "build", "-l", "3000" ]
