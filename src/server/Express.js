import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.set('strict routing', true);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
