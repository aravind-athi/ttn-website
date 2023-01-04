#  Dockerfile for Node Express Backend
FROM node:18.12.1-alpine

# Create App Directory
WORKDIR /app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]