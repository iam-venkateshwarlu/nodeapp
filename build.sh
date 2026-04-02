#!/bin/bash
echo "Building the project..."
# Add your build commands here
npm install
npm run build
echo "Build completed successfully."

echo "Building docker image..."
# Add your docker build commands here
docker build -t nodeapp:$BUILD_NUMBER .