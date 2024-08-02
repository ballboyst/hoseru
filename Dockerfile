FROM node:22-alpine3.20

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]