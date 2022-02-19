FROM node:12.18.3-alpine as build

LABEL version="1.0"
LABEL description="This is the base docker image for the Web Portfolio NextJs server."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
