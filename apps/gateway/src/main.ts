/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { myLib } from '@juri/my-lib';
import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  console.log(myLib());

  res.send({ message: 'Welcome to gateway!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
