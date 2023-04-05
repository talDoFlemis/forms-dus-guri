FROM node:lts-alpine as base

# Install dependencies
FROM base as dependencies
COPY package*.json ./
RUN yarn install

# Build the app
FROM base as build
COPY . .
COPY --from=dependencies /node_modules ./node_modules
RUN yarn build

ENV NODE_ENV=production
RUN rm -rf node_modules && \
yarn install --immutable --immutable-cache --check-cache --production && \
yarn cache clean --force

# Run the app
FROM base as runtime
USER node

COPY --from=build --chown=node:node /dist .
COPY --from=build --chown=node:node /node_modules ./node_modules

EXPOSE 4000

CMD ["node", "server.js"]
