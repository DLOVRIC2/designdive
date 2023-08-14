Prerequisites
To run DesignDive, you need:

Docker (https://www.docker.com/products/docker-desktop)
Docker Compose, which is included with Docker Desktop for Mac and Windows, but needs to be installed separately for Linux (https://docs.docker.com/compose/install/)
Git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
Getting Started
Follow these steps to get DesignDive up and running:

Clone the repository

git clone https://github.com/DLOVRIC2/designdive
Navigate to the repository directory

cd designdive
Build the Docker images

docker-compose build
Start the Docker containers

docker-compose up --build


Front end will start at: localhost:3000
Backend will start at: localhost:8000



To stop the application, use the command docker-compose down.

Troubleshooting
If you face any issues, check:

Your Docker version: Ensure that your Docker version is up-to-date.
Dockerfile paths: Ensure the paths specified in the docker-compose.yml are correct.
