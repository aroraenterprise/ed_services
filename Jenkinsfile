pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stages {
    stage('Install dependencies') {
      when {
          expression {
              STORE = sh (script: "git log -1 | grep '\\[store\\]'", returnStatus: true)
              Events = sh (script: "git log -1 | grep '\\[events\\]'", returnStatus: true)
              Accounts = sh (script: "git log -1 | grep '\\[accounts\\]'", returnStatus: true)
              return STORE || EVENTS || Accounts
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
              expression {
                  return sh (script: "git log -1 | grep '\\[store\\]'", returnStatus: true)
              }
          }
          steps {
            sh 'npm run deploy-store'
          }
        }
        stage('Deploy events') {
          when {
              expression {
                  return sh (script: "git log -1 | grep '\\[events\\]'", returnStatus: true)
              }
          }
          steps {
            sh 'npm run deploy-events'
          }
        }
        stage('Deploy accounts') {
          when {
              expression {
                  return sh (script: "git log -1 | grep '\\[accounts\\]'", returnStatus: true)
              }
          }
          steps {
            sh 'npm run deploy-accounts'
          }
        }
      }
    }
  }
}