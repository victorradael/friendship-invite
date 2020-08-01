import 'reflect-metadata';
import express, { json } from 'express';
import './orm';

const app = express();
app.use(json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello, TypeScript!' });
});

app.listen(3333);
