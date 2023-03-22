FROM node:18.5-alpine3.16 as installer

WORKDIR "/dep"

COPY ["./package.json","/dep"]

RUN npm install

FROM node:18.5-alpine3.16 as runtime

WORKDIR "/app"

COPY [".","/app"]

COPY --from=installer \
      /dep/node_modules/ /app/node_modules

ENTRYPOINT node app.js

EXPOSE 3000