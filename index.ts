import express, { Request, Response } from 'express';
import { calculateBmi } from './src/bmiCalculator';
import { calculateExercises } from './src/exerciseCalculator';

const app = express();
app.use(express.json());
const PORT = 3003;

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

app.post('/exercises', (req, res): void => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || target === undefined) {
    res.status(400).json({ error: 'parameters missing' });
    return;
  }

  if (
    !Array.isArray(daily_exercises) ||
    !daily_exercises.every((n) => typeof n === 'number') ||
    typeof target !== 'number'
  ) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const result = calculateExercises(daily_exercises, target);
  res.json(result);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
