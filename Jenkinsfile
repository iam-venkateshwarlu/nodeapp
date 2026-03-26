pipeline {
    agent any
    environment {
        SONAR_TOKEN = credentials('sonar-token')
    }
    
    stages {
    	stage('Checkout') {
    	     steps {
    	     	  git branch: 'main', url: 'https://github.com/iam-venkateshwarlu/nodeapp.git'
    	     	 }
    	     	 }
    	     	 
    	stage('Build') {
    	steps {
    	sh 'npm install'
    	}
    	}
    	
    	stage('SonarQube Scan') {
    steps {
        sh '''
        docker run --rm \
        -v $(pwd):/usr/src \
        sonarsource/sonar-scanner-cli \
        -Dsonar.projectKey=nodeapp \
        -Dsonar.sources=. \
        -Dsonar.host.url=http://sonarqube:9000 \
        -Dsonar.login=$SONAR_TOKEN
        '''
    }
}
    	
    	stage('Trivy scan'){
    	steps{
    	sh 'trivuy fs .'
    	}
    	}
    	
    	stage('Docker Build'){
    	steps{
    	sh ''' docker build -t venkatesh1409/mynodeapp:$BUILD_NUMBER .
'''
}
}
}
}

    	
