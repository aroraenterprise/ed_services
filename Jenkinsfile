pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    } 
    stage('Build Store') {
      steps {
        sh 'npm run deploy-store'
      }
    }
  }
}