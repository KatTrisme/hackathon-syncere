FROM node:18.5-alpine3.16 as installer

WORKDIR "/dep"

COPY ["./package.json","/dep"]

RUN npm install

FROM node:18.5-alpine3.16 as builder

WORKDIR "/app"

COPY --from=installer \
      /dep/node_modules/ /app/node_modules

COPY [".","/app"]

RUN npm run build

FROM nginx:1.23.0-alpine as runtime

COPY --from=builder \
      /app/dist/ /usr/share/nginx/html

RUN chmod 500 -R /usr/share/nginx/html && \
      chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80


