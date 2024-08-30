import express from 'express';
import issuesRoutes from './routes/issues';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// Use routes
app.use('/issues', issuesRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
