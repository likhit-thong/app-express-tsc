import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port: number = parseInt((process.env.PORT ?? '3000') as string);

app.get('/', (req: Request, res: Response) => {
  return res.send({ message: 'Hello, World' });
});

app.get('/random', (req: Request, res: Response) => {
  return res.send({
    number: Math.floor(Math.random() * 100),
  });
});

async function main() {
  try {
    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (e) {
    process.exit(1);
  }
}

main();
