import express, { Request, Response } from 'express';
import { calculateBmi } from './src/bmiCalculator';
import { calculateExercises } from './src/exerciseCalculator';
import { z } from 'zod';

const app = express();
app.use(express.json());
const PORT = 3003;

const exerciseValidator = z.object({
  daily_exercises: z.array(z.number()),
  target: z.number(),
});

app.get('/hello', (_req: Request, res: Response): void => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req: Request, res: Response): void => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const bmi = calculateBmi(height, weight);
  res.json({ weight, height, bmi });
});

app.post('/exercises', (req: express.Request, res: express.Response): void => {
  try {
    const parsedBody = exerciseValidator.parse(req.body);
    const { daily_exercises, target } = parsedBody;

    const result = calculateExercises(daily_exercises, target);
    res.json(result);

  } catch (error) {
    res.status(400).json({ error: 'malformatted parameters' });
  }
});

app.listen(PORT, () => {
  console.log('Server running on port 3003');
});
