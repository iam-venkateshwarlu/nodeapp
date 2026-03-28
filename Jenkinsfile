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
    	
    	
    	
    	
    	
    	stage('Docker Build'){
    	steps{
    	sh ''' docker build -t venkatesh1409/mynodeapp:$BUILD_NUMBER .
'''
}
}
}
}

    	
