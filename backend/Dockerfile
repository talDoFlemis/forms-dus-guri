FROM node:lts-alpine as base

# Install dependencies
FROM base as dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Build the app
FROM base as build
COPY . .
COPY --from=dependencies /node_modules ./node_modules
RUN yarn build

# Run the app
FROM base as runtime
USER node

COPY --from=build --chown=node:node /dist .
COPY --from=build --chown=node:node /node_modules ./node_modules
COPY prisma ./prisma
COPY .env ./
COPY package.json ./

EXPOSE 4000

CMD ["node", "server.js"]
