pipeline {
  agent any
  stages {
    stage('Build Store') {
      steps {
        sh 'java -jar ./swagger-codegen-cli-2.4.0.jar generate -i ./store.yaml -l typescript-angular -o ./clients/store --additional-properties ngVersion=6'
      }
    }
  }
}