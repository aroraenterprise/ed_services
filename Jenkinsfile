pipeline {
  agent any
  stages {
    stage('Build Store') {
      steps {
        sh 'java -jar ./swagger-codegen-cli-2.4.0.jar generate -i https://raw.githubusercontent.com/aroraenterprise/ed_services/v1.0.11/store.yaml?14 -l javascript -o ./store-ts'
      }
    }
  }
}