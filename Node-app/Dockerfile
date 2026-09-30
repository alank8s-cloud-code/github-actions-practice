# base image of nodejs

FROM node:18-alpine

# Set the working directory inside the container

WORKDIR /app

# Copy the dependency file

COPY package.json .

# Install the dependency

RUN npm install

# Copy the remaining file
#.( this dot use for current directory ) .(this do copy the all files and store in /app inside container) 

COPY . .

# EXPOSE THE CONTAINER PORT

EXPOSE 3000

# RUN THE web-app 

CMD ["node", "app.js"]
