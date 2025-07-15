import { Request, Response } from 'express';
import { server } from './server';
export class controller {
  async Multiplication(req: Request, res: Response) {
    try {
      const { item } = req.body;
      if (!item) this.handleError(res, new Error('Введите число'), 404);
      const result = await new server().multiplication(item);
      res.json(result);
    } catch (error: unknown) {
      this.handleError(res, error, 404);
    }
  }
  // обработчик ошибок
  private handleError(res: Response, error: unknown, statusCode = 500) {
    if (error instanceof Error) {
      res.status(statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Произошла неизвестная ошибка' });
    }
  }
}