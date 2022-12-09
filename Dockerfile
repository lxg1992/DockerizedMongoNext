FROM node:16.0-alpine AS development
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=development
COPY package.json package-lock.json ./
COPY .env.local ./
#COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
# docker build -t next-dev --target development .
# docker run --rm -it --name NAME -p 3000:3000 -v ${PWD}:/app -w /app -target
# docker run --rm -it --name nextdev -p 3000:3000 -v ${PWD}:/app . 

FROM node:16.0-alpine AS dependencies
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:16.0-alpine AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm ci && NODE_ENV=production npm run build

FROM node:16.0-alpine AS production
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
COPY --chown=node --from=builder /app/next.config.js ./
COPY --chown=node --from=builder /app/public ./public
COPY --chown=node --from=builder /app/.next ./.next
COPY --chown=node --from=builder /app/package-lock.json /app/package.json ./
COPY --chown=node --from=dependencies /app/node_modules ./node_modules
USER node
EXPOSE 3000
CMD [ "npm", "run", "start" ]