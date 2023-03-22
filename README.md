# All Things Syncere

Hello welcome to the Syncere repo, here lies all the Syncere services.

## Getting Started

The following instructions will get the applications running locally.

### Prerequisites

Requirements for the software.
- [Docker](https://www.docker.com/)

## Running

**Run the services.**
```
$ docker-compose up -d 
```

## Infrastructure Overview
**React Js**
**Node Js**
**Icon Blockchain**
**Mongo DB**

### On Create
* Information is extracted from UI and sent to ICON SCORE address via Node API, on success the request is sent to Mongo DB to create 
a new entry, on success A QR code is sent back to UI.

### On Update
* Information is extracted from UI using QR code and scanner. The information is sent to get validated by ICON API, on success
it is checked if it exists in MongoDB, it is then sent to ICON SCORE address, on success a new QR code is created and sent back to UI.

### On Read
* Information is extracted from  UI using QR code and scanner. The information is then displayed to user decoded.