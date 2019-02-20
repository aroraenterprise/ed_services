pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stages {
    stage('Build Store') {
      steps {
        sh 'npm run deploy-store'
      }
    }
  }
}