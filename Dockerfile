FROM oven/bun:alpine
COPY . .

RUN bun install
CMD ["/usr/local/bin/bun", "run", "serve"]