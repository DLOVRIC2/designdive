# Alpine image
FROM node:14.16.0-alpine3.13

# Create working directory
WORKDIR /frontend

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Expose port 3000 for front end
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
