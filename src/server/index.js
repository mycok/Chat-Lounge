import server from './Express';
import config from '../config';
import logger from '../utils/logger';

const { port } = config;

server.listen(port, () => {
  logger.info(`*****listening on port ${port}*****`);
});
