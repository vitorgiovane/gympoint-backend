FROM node:12.6.0-alpine

ENV HOME=/atmosphere

WORKDIR $HOME

COPY package.json $HOME

RUN npm install --silent --progress=false

COPY . $HOME
