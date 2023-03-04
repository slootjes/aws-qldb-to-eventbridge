# QLDB to EventBridge using Pipes

Proof of concept of using EventBridge Pipes to log all changes and queries to S3 using EventBridge Pipes.

**Warning** running this stack costs money even when not in use because of the Kinesis Data Stream in this stack.

## Prerequisites
- [Serverless Framework](https://www.serverless.com/framework)

## Installation
- npm install
- serverless deploy --stage dev --verbose
