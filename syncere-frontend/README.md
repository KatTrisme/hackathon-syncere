# Syncere React Web Frontend

This is the source code for the React Web frontend service for Syncere users and admins.


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
$ npm run serve
```

### Packaging

**Creating docker image**
```
$ docker image build --tag syncere-react-web .
```

**Run docker image**
```
$ docker run --rm -it -p 80:80 syncere-react-web
```

## Built With

- [Node](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [MeterialUI](https://mui.com/)
