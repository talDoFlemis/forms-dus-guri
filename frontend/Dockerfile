FROM node:lts-alpine AS base

FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install 

FROM base AS build
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN yarn build

FROM nginx:alpine AS web
COPY --from=build /dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
