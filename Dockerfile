FROM node:16

ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

ENV NODE_ENV=production
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID ${CONTENTFUL_SPACE_ID}
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ${CONTENTFUL_ACCESS_TOKEN}

WORKDIR /usr/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent

COPY . .

RUN npm run build

CMD [ "npm", "start" ]