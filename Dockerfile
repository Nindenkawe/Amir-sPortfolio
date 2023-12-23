# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all the app files to the container's working directory
COPY . .

# Build the Vue.js app for production (replace 'npm run build' with your build command if different)
RUN npm run build

# Expose the port that your Vue.js app will run on (change this if your app uses a different port)
EXPOSE 8080

# Command to start the app when the container is run
CMD ["npm", "run", "serve"]
