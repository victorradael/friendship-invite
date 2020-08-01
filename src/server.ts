import 'reflect-metadata';
import express, { json } from 'express';

const app = express();
app.use(json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello, TypeScript!' });
});

app.listen(3333, () => {
  console.log('🚀 Server started on http://localhost:3000');
});
