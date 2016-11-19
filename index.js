/**
 * Created by ruslansalahov on 18/11/2016.
 */

import express from 'express';

const server = express();

const port =  process.env.PORT || 5000;
server.set('port', port);

server.use(express.static(`${__dirname}/public`));

server.get('*', (req, res) =>
  res.sendFile(`${__dirname}/public/index.html`)
);

server.listen(server.get('port'), () =>
  console.log(`server listening on port ${server.get('port')}`));