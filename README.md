# Docker Web Application Setup Guide

This guide will walk you through the steps to set up your web application using Docker and Docker Compose.

## Prerequisites
Before proceeding, make sure you have the following installed:
- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)

## Steps

### 1. Install Docker
Follow the official [Docker installation guide](https://docs.docker.com/get-docker/) to install Docker on your system.

### 2. Clone the Sample Web Application
You can clone your app from the previous OnTrack task or proceed with the app for your HD tasks.

To clone the app:
```bash
git clone <repository-url>
cd <app-directory>
```

### 3. Create a Dockerfile
```markdown
A `Dockerfile` is used to define the environment and instructions for building your application image. Create a file named `Dockerfile` in the root of your application directory and add the following content:

```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["npm", "run", "dev"]
```

### 4. Build the Docker image
To build the Docker image, run the following command in the terminal from the root of your application directory:

```bash
docker build -t my-web-app .
```

Here:
- `-t my-web-app` assigns a name (`my-web-app`) to your Docker image.
- `.` specifies the current directory as the build context.

### 5. Run the Docker container
Once the image is built, you can run it using the following command:

```bash
docker run -p 5173:5173 my-web-app
```

This maps port `5173` on your local machine to port `5173` in the container, allowing you to access the application in your browser at `http://localhost:5173`.

### 6. Start the Docker Compose environment
To simplify running your application, you can use Docker Compose. Create a `docker-compose.yml` file in the root of your application directory with the following content:

```yaml
version: '3.8'

services:
    web:
        build: .
        ports:
            - "5173:5173"
```

Run the application using Docker Compose:

```bash
docker-compose up
```

This will build and start your application container.

### 7. Test the application 
To test the application, follow these steps:

1. Open your web browser.
2. Navigate to `http://localhost:${port}`.
3. Verify that the application is running and accessible.

If the application does not load, check the following:
- Ensure Docker and Docker Compose are running.
- Verify that the container is running by using the command:
    ```bash
    docker ps
    ```
- Check the logs for any errors:
    ```bash
    docker logs <container-id>
    ```

Once the application is confirmed to be working, you have successfully set up and tested your Dockerized web application.

### 8. Push the Docker image to a registry
To push your Docker image to a registry, follow these steps:

1. **Log in to Docker Hub**  
    If you are using Docker Hub as your registry, log in using the following command:
    ```bash
    docker login
    ```
    Enter your Docker Hub username and password when prompted.

2. **Tag the Docker image**  
    Tag your image with the repository name in the format `<username>/<repository>:<tag>`. For example:
    ```bash
    docker tag my-web-app your-dockerhub-username/my-web-app:latest
    ```

3. **Push the image to the registry**  
    Use the `docker push` command to upload your image:
    ```bash
    docker push your-dockerhub-username/my-web-app:latest
    ```

4. **Verify the image in the registry**  
    Log in to your Docker Hub account and navigate to the repository to confirm that the image has been successfully uploaded.

Now your Docker image is available in the registry and can be pulled and used on other systems.