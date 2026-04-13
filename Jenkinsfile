pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    environment {
        IMAGE_NAME = "venkatesh1409/nodeapp"
        IMAGE_TAG = "${BUILD_NUMBER}"
        SONAR_HOST_URL = "http://sonarqube:9000"
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
                sh 'npm test'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                        sh '''
                        sonar-scanner \
                          -Dsonar.projectKey=nodeapp \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=$SONAR_HOST_URL \
                          -Dsonar.login=$SONAR_TOKEN
                        '''
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
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
                sh '''
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                docker tag $IMAGE_NAME:$IMAGE_TAG $IMAGE_NAME:latest
                '''
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS')]) {

                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Docker Push Image') {
            steps {
                sh '''
                docker push $IMAGE_NAME:$IMAGE_TAG
                docker push $IMAGE_NAME:latest
                '''
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f'
        }
        success {
            echo '\u2705 Pipeline completed successfully'
        }
        failure {
            echo '\u274c Pipeline failed.'
        }
    }
}