FROM ubuntu:latest

# Install Blender
RUN apt-get update && \
    apt-get install -y blender && \
    rm -rf /var/lib/apt/lists/*

# Copy files
COPY . . 

# Define volume for output directory
VOLUME /final_user_output

# Run Blender's Python interpreter on your script
ENTRYPOINT ["blender", "--background", "--python", "/test.py"]
