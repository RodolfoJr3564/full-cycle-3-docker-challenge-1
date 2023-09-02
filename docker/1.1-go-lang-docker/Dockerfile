FROM golang:1.21 as builder

WORKDIR /src

COPY <<EOF ./main.go
package main

import "fmt"

func main() {
  fmt.Println("Full Cycle Rocks!!")
}
EOF

RUN go build -o /bin/go-hello-full-cycle-3.0 ./main.go

FROM scratch

COPY --from=builder /bin/go-hello-full-cycle-3.0 /bin/go-hello-full-cycle-3.0

CMD ["/bin/go-hello-full-cycle-3.0"]
