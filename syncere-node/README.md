# Syncere Node

This is the source code for node backend API for Syncere.


## Getting Started

The following instructions will get the application running locally.

### Prerequisites

Requirements for the software.
- [Nodejs](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/)

### Installing

A step by step guideline to setting the application's environment.

**Install dependencies.**
```
$ npm install
```

### Running

**To run application**
```
$ node app.js
```

### Packaging

**Creating docker image**
```
$ docker image build --tag syncere-node .
```

**Run docker image**
```
$ docker run --name syncere-node -d -p 8081:3000 syncere-node
```
