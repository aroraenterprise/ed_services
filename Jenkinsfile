pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stages {
    stage('Install dependencies') {
      when {
        anyOf {
          changelog '.*^\\[store\\] .+$'
          changelog '.*^\\[events\\] .+$'
          changelog '.*^\\[accounts\\] .+$'
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
            changelog '.*^\\[store\\] .+$'
          }
          steps {
            sh 'npm run deploy-store'
          }
        }
        stage('Deploy events') {
          when {
            changelog '.*^\\[events\\] .+$'            
          }
          steps {
            sh 'npm run deploy-events'
          }
        }
        stage('Deploy accounts') {
          when {
            changelog '.*^\\[accounts\\] .+$'          
          }
          steps {
            sh 'npm run deploy-accounts'
          }
        }
      }
    }
  }
}