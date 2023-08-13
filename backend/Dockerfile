# Python image
FROM python:3.10

# Create backend directory
WORKDIR /backend

# Install Blender
RUN apt-get update && \
    apt-get install -y blender && \
    rm -rf /var/lib/apt/lists/*


# Install app dependencies
COPY requirements.txt .
RUN pip3 install -r requirements.txt

# Bundle app source
COPY . .

# Define volume for output directory
VOLUME /final_user_output


# Expose port 8000 for backend
EXPOSE 8000

# Last step still to be determined
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
