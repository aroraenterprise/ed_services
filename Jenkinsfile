pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stages {
    stage('Install dependencies') {
      when {
        anyOf {
          changeset 'store.yaml'
          changeset 'events.yaml'
          changeset 'accounts.yaml'
        }
      }
      steps {
        sh 'npm install'
      }
    } 
    stage('Deploy') {
      parallel {
        stage('Deploy store') {
          when {
            changeset 'store.yaml'
          }
          steps {
            sh 'npm run deploy-store'
          }
        }
        stage('Deploy events') {
          when {
            changeset 'events.yaml'                       
          }
          steps {
            sh 'npm run deploy-events'
          }
        }
        stage('Deploy accounts') {
          when {
            changeset 'accounts.yaml'
          }
          steps {
            sh 'npm run deploy-accounts'
          }
        }
      }
    }
  }
}
