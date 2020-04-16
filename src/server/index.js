import app from './Express';
import config from '../config';

const { port } = config;

app.listen(port, () => {
  console.log(`*****listening on port ${port}*****`);
});
