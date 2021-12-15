FROM node:12
WORKDIR /user/src/
RUN rm -f ./app
WORKDIR /usr/src/app
COPY . .
WORKDIR /usr/src/app/client

RUN npm install 
RUN npm run build 
WORKDIR /usr/src/app/server
RUN npm install


EXPOSE 5000

CMD [ "node", "index.js" ]
