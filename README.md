<<<<<<< HEAD
# JobDescriptions
This application allows users to submit job descriptions through a web interface. Job descriptions are stored in an AWS DynamoDB table through a serverless architecture using AWS.

and gives users a JOBID that starts with JOB followed by a 4-digit number.

## To run with Docker 
docker pull iokur/jobdescription:latest

docker run -p 3000:3000 iokur/jobdescription:latest


