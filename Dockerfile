FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

# FROM nginx:1.18-alpine AS deploy-static

# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=build /app/build-static .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:18-alpine AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
COPY --from=build /app/build .
RUN npm ci --prod
EXPOSE 3000
CMD ["node", "index.js"]
