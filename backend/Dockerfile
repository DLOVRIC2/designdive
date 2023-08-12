# Python image
FROM python:3.10

# Create backend directory
WORKDIR /backend

# Install app dependencies
COPY requirements.txt .
RUN pip3 install -r requirements.txt

# Bundle app source
COPY . .

# Expose port 8000 for backend
EXPOSE 8000

# Last step still to be determined
CMD ["python3", "generate_objects.py"]