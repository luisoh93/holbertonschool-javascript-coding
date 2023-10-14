const http = require('http');

const port = 1245;
const databasePath = 'database.csv';
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents(databasePath)
      .then(() => {
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.end('Error');
      });
   } else {
      res.end('Not Found');
   }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
