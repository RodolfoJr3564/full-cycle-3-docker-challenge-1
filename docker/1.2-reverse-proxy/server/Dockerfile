FROM alpine as builder

RUN apk add --no-cache wget

RUN wget -q -O /wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
  chmod +x /wait-for

FROM nginx:latest

WORKDIR /etc/nginx

COPY ./default.conf ./conf.d 

COPY --from=builder /wait-for /usr/bin/wait-for


RUN apt update && \
  apt install -y netcat-traditional && \
  rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["wait-for", "app:3000", "-t", "60", "--", "nginx", "-g", "daemon off;"]