// -> Dot Env
import 'dotenv/config';

// -> Express
import express from 'express';

// -> Routes
import { privateRoutes } from './routes/privateRoutes';
import { publicRoutes } from './routes/publicRoutes';

// -> Middlewares
import { authMiddleware } from './app/middlewares/authMiddleware';

const app = express();

app.use(express.json())

app.use('/api/v1', publicRoutes)
app.use(authMiddleware)
app.use('/api/v1', privateRoutes)

app.listen(
  3333, 
  () => console.log('Server is running at http://localhost:3333')
);