FROM node:16.13.0 as node

RUN mkdir -p /node-app


COPY package*.json /node-app
WORKDIR /node-app
RUN npm install

COPY . .

EXPOSE 4000
CMD ["node", "index.js"]
