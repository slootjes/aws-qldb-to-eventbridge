# QLDB to EventBridge using Pipes

Proof of concept of using EventBridge Pipes to log all changes and queries from a Quantum Ledger Database to EventBridge using EventBridge Pipes.

**Warning** running this stack costs money even when not in use because of the Kinesis Data Stream in this stack.

[Read this blog post](https://dev.to/slootjes/qldb-to-eventbridge-using-pipes-1lgf) for background information on this proof of concept.

## Prerequisites
- [Serverless Framework](https://www.serverless.com/framework)

## Installation
- npm install
- serverless deploy --stage dev --verbose
