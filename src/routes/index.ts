import { Router, Request, Response } from 'express';

const router = Router();

router.use('/', (req: Request, res: Response) => {
  res.json({ message: 'OK' });
});

export default router;