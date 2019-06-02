import express from 'express';
import { convertDate } from './utility';

const app = express();

app.listen(8080, '0.0.0.0', () => {
  // eslint-disable-next-line
  console.log(
    `🚀 server listening on the port 8080 in ${convertDate(
      new Date(),
      'YYYY-MM-DD hh:mm:ss',
    )}`,
  );
});
