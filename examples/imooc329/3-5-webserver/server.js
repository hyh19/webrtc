'use strict'

const https = require('https');
const fs = require('fs');
const express = require('express');
const serveIndex = require('serve-index');

const app = express();

// 顺序不能换
app.use(serveIndex('public', {'icons': true}));
app.use(express.static('public'));

const options = {
    key: fs.readFileSync('cert/9179457_hyh29.site.key'),
    cert: fs.readFileSync('cert/9179457_hyh29.site.pem')
}

const server = https.createServer(options, app);
server.listen(443, '0.0.0.0');
