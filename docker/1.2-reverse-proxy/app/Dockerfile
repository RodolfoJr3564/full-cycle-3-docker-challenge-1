FROM node:latest AS build

WORKDIR /usr/src/app

RUN apt-get update && \
  apt-get install -y --no-install-recommends dumb-init netcat-traditional && \
  wget -q -O /bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
  chmod +x /bin/wait-for

FROM node:alpine

USER node

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY --from=build /bin/wait-for /bin/wait-for
COPY --from=build /bin/nc /bin/nc

ENTRYPOINT ["wait-for", "mysql:3306", "-t", "60", "--", "sh", "./start.sh"]
