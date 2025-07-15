import express from 'express';
import { createRouter } from './routes';
import cors from 'cors';

async function bootstrap() {
  const app = express();
  app.use(express.json());
  app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
  app.use('/multiplication', createRouter());
  app.listen(3001, () => {
    console.log('Сервис запущен на порту 3001');
  });
}
bootstrap().catch(console.error);