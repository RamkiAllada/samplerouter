pipeline {
    agent { docker { image 'node:10.16.3' } }
    stages {
        stage('build') {
            steps {
                sh 'echo "starting the build"'
                sh 'npm install && npm run build'
            }
        }
    }
}