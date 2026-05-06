# Docker Setup Guide for SilverHeartCare

## Prerequisites

- Docker Desktop installed ([docker.com](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## Quick Start

### Build and Run with Docker Compose

```bash
# Build the Docker image
docker-compose build

# Start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The app will be available at: **http://localhost:3000**

## Manual Docker Commands

### Build the Image

```bash
docker build -t silverheartcare:latest .
```

### Run the Container

```bash
docker run -p 3000:3000 \
  --name silverheartcare \
  --restart unless-stopped \
  silverheartcare:latest
```

### View Logs

```bash
docker logs -f silverheartcare
```

### Stop the Container

```bash
docker stop silverheartcare
docker rm silverheartcare
```

## Environment Variables

To pass environment variables at runtime:

```bash
docker run -p 3000:3000 \
  -e VITE_EMAILJS_SERVICE_ID=your_service_id \
  -e VITE_EMAILJS_PUBLIC_KEY=your_public_key \
  silverheartcare:latest
```

Or in `docker-compose.yml`:

```yaml
services:
  silverheartcare:
    environment:
      - VITE_EMAILJS_SERVICE_ID=your_service_id
      - VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Production Deployment

### Push to Docker Registry

```bash
# Tag the image
docker tag silverheartcare:latest yourusername/silverheartcare:latest

# Push to Docker Hub
docker push yourusername/silverheartcare:latest
```

### Deploy on Cloud Platforms

**AWS ECS:**
```bash
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin your_account.dkr.ecr.us-east-1.amazonaws.com

docker tag silverheartcare:latest your_account.dkr.ecr.us-east-1.amazonaws.com/silverheartcare:latest

docker push your_account.dkr.ecr.us-east-1.amazonaws.com/silverheartcare:latest
```

**Google Cloud Run:**
```bash
gcloud builds submit --tag gcr.io/your-project/silverheartcare

gcloud run deploy silverheartcare \
  --image gcr.io/your-project/silverheartcare \
  --platform managed \
  --region us-central1 \
  --port 3000
```

**Azure Container Instances:**
```bash
az acr build --registry myregistry --image silverheartcare:latest .

az container create \
  --resource-group myresourcegroup \
  --name silverheartcare \
  --image myregistry.azurecr.io/silverheartcare:latest \
  --ports 3000 \
  --environment-variables VITE_EMAILJS_SERVICE_ID=your_id
```

## Development with Docker

For development, you can use a development Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev"]
```

Then run:

```bash
docker run -p 5173:5173 -v $(pwd):/app silverheartcare:dev
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
docker run -p 8080:3000 silverheartcare:latest
# App will be at http://localhost:8080
```

### Permission Denied

On Linux, if you get permission errors:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Image Too Large

To reduce image size, ensure `.dockerignore` excludes unnecessary files.

### Container Won't Start

Check logs:

```bash
docker logs <container_id>
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Build and Push Docker Image

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: docker/setup-buildx-action@v2
      - uses: docker/build-push-action@v4
        with:
          push: true
          tags: yourusername/silverheartcare:latest
```

## Best Practices

- ✅ Use `.dockerignore` to exclude unnecessary files
- ✅ Use multi-stage builds to reduce image size
- ✅ Set resource limits: `--memory 512m --cpus 0.5`
- ✅ Use health checks for monitoring
- ✅ Never commit credentials in Dockerfile
- ✅ Use specific Node.js versions (not `latest`)
- ✅ Run as non-root user in production (optional)

## Security Notes

- 🔒 Never store secrets in Dockerfile
- 🔒 Use environment variables or Docker secrets
- 🔒 Scan images for vulnerabilities: `docker scan silverheartcare:latest`
- 🔒 Use read-only filesystems when possible
