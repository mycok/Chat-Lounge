import app from './Express';
import config from '../config';
import logger from '../utils/logger';

const { port } = config;

app.listen(port, () => {
  logger.info(`*****listening on port ${port}*****`);
});
