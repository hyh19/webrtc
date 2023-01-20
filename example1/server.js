'use strict'

const http = require('http');
const https = require('https');
const fs = require('fs');
const serveIndex = require('serve-index');
const express = require('express');

const app = express();

// 顺序不能换
app.use(serveIndex('./public'));
app.use(express.static('./public'));

const options = {
    key: fs.readFileSync('./cert/9179457_hyh29.site.key'),
    cert: fs.readFileSync('./cert/9179457_hyh29.site.pem')
}

const https_server = https.createServer(options, app);
https_server.listen(443, '0.0.0.0');

const http_server = http.createServer(app);
http_server.listen(80, '0.0.0.0');
