FROM node:22-alpine3.20
WORKDIR /app
COPY ./ /app
RUN npm cache clean --force
RUN npm install 
RUN npx next --version || echo "Next.js is not installed."
RUN npm run build
CMD ["npm", "run", "dev"]