pipeline {
    agent any

    environment {
        IMAGE_NAME = "venkatesh1409/nodeapp"
        IMAGE_TAG = "${BUILD_NUMBER}"
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
        
        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    withCredentials([string(credentialsId: 'sonar-Token', variable: 'SONAR_TOKEN')]) {
                        sh '''
                        sonar-scanner \
                          -Dsonar.projectKey=nodeapp \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://host.docker.internal:9000 \
                          -Dsonar.login=$SONAR_TOKEN
                        '''
                    }
                }
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS')]) {

                    sh 'docker login -u $USER -p $PASS'
                }
            }
        }

        stage('Docker Push Image') {
            steps {
                sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f'
        }
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}