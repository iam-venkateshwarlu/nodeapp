import os

print("Building Docker image...")
os.system("docker build -t nodeapp:$BUILD_NUMBER .")

# print("Pushing Docker image...")
# os.system("docker push nodeapp:$BUILD_NUMBER")

# print("Deploying to Kubernetes...")
# os.system("kubectl apply -f deployment.yaml")

print("Deployment completed")