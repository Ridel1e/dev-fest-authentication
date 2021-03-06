/**
 * Created by ruslansalahov on 18/11/2016.
 */

const express = require('express');

const server = express();

const  port = process.env.PORT || 5000;
server.set('port', port);

server.use(express.static(__dirname + '/public'));

server.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(server.get('port'), function () {
  console.log('server listening on port' + server.get('port'));
});