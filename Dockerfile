FROM node:16

ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

ENV NODE_ENV=production
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID=2ofdg3mmu66v
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=W2oJQHWiXxxrOzOH7waabP9SaXNNvWlB8TPZwELXbhM

WORKDIR /usr/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]