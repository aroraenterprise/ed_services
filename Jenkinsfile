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
    stage('Deploy') {
      parallel {
        stage('Deploy store') {
          steps {
            sh 'npm run deploy-store'
          }
        }
        stage('Deploy events') {
          steps {
            sh 'npm run deploy-events'
          }
        }
        stage('Deploy accounts') {
          steps {
            sh 'npm run deploy-accounts'
          }
        }
      }
    }
  }
}