# Alpine image
FROM node:14.16.0-alpine3.13

# Install react-scripts globally
RUN npm install -g react-scripts

# Create working directory
WORKDIR /frontend

# Install app dependencies
COPY package*.json .
RUN npm install

# Copy the rest of the files
COPY . .

# Expose port 3000 for front end
EXPOSE 3000

# Start the app using globally installed react-scripts
CMD ["react-scripts", "start"]
