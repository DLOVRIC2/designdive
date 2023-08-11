FROM ubuntu:latest

# Install Blender
RUN apt-get update && \
    apt-get install -y blender && \
    rm -rf /var/lib/apt/lists/*

# Copy your Python script into the container
COPY test.py /test.py

# Copy the objectConfigurator folder into the container
COPY objectConfigurator /objectConfigurator

# Run Blender's Python interpreter on your script
ENTRYPOINT ["blender", "--background", "--python", "/test.py"]
