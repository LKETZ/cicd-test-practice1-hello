# Use a light version of Node
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install 
#set project 

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]