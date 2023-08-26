🏆 Hackathon Winner 🏆

We are proud to announce that this project won the 3D Model AI Hackathon https://lablab.ai/event/3d-ai-models-hackathon hosted by Lablab.ai
![image](https://github.com/DLOVRIC2/designdive/assets/111785311/4543e10b-0fcd-4d6a-b48f-60cb517cd5ba)


---
## DesignDive Application

![image](https://github.com/DLOVRIC2/designdive/assets/66421606/43d1709c-7db5-4098-b8dd-7a206f4fc959)


Part of the Lablab.ai 3D AI Hackathon challange

The application demo is available on request through ngrok tunnel.


### Prerequisites

To run DesignDive, you need

- Docker (https://www.docker.com/products/docker-desktop)
- Docker Compose, which is included with Docker Desktop for Mac and Windows, but needs to be installed separately for Linux (https://docs.docker.com/compose/install/)
- Git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- You will also need to get Replicate API key to run OpenAI Shap-e model. (https://replicate.com/)

### Getting Started

Follow these steps to get DesignDive up and running

1. **Clone the repository**
   ```
   git clone https://github.com/DLOVRIC2/designdive
   ```

2. **Navigate to the repository directory**
   ```
   cd designdive
   ```

3. **Export your key to local session**
   ```
   export REPLICATE_API_TOKEN=you_api_key
   ```

4. **Start the Docker containers**
   ```
   docker-compose up --build
   ```

   This will start the front-end application at http://localhost:3000.

To stop the application, use the command `docker-compose down`.

### Troubleshooting

If you face any issues, check

- Your Docker version Ensure that your Docker version is up-to-date.
- Dockerfile paths Ensure the paths specified in the `docker-compose.yml` are correct.

---
