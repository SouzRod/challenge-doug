FROM node:24

WORKDIR /bfb-ms-signature

COPY package*.json .

RUN npm ci

COPY . .

CMD [ "npm", "run", "start:prd" ]
