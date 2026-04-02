
pipeline {
    agent any

    environment {
        IMAGE_NAME = "venkatesh1409/nodeapp"
    }

    tools {
        nodejs 'NodeJS-18'
    }

    stages {

        stage('Clone Code') {
            steps {
            git branch: 'main', url: 'https://github.com/iam-venkateshwarlu/nodeapp.git'
             }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Run Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodeapp:$BUILD_NUMBER .'
            }
        }

    }
}


    	
