
pipeline {
    agent any

    environment {
        IMAGE_NAME = "venkatesh1409/nodeapp"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/iam-venkateshwarlu/nodeapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
            }
        }
    }
}
    	
