const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const http = require('http');
const adminRouter = require('./src/routes/admin');
const clientRouter = require('./src/routes/client');
const errorHandler = require('./src/middleware/errorHander')

const app = express();

app.use(express.json());
app.use(logger('short'));
app.use(cors({
    origin: '*',
    methods: ['GET','POST','OPTIONS','PUT']
}));
app.use('/admin', adminRouter);
app.use('/client', clientRouter);

app.use(errorHandler);

http.createServer(app).listen(3000);