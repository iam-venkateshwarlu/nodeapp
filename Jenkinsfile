pipeline {
    agent any
    
    stages {
    	stage('Checkout') {
    	     steps {
    	     	 git 'https://github.com/iam-venkateshwarlu/mynodeapp.git'
    	     	 }
    	     	 }
    	     	 
    	stage('Build') {
    	steps {
    	sh 'npm install'
    	}
    	}
    	
    	stage('SonarQube Scan') {
    	steps{
    	sh 'sonar-scanner'
    	}
    	}
    	
    	stage('Trivy scan'){
    	steps{
    	sh 'trivuy fs .'
    	}
    	}
    	
    	stage('Docker Build'){
    	steps{
    	sh 'docker build -t venkatesh1409/mynodeapp:$BUILD_NUMBER .
'
}
}
}
}

    	
