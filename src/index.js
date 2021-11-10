const express = require('express');
const app = express();
const cors = require('cors');
const upload = require('express-fileupload');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());

app.get('/', (req, resp) => {
  resp.json({
    msg: 'Welcome',
  });
});

app.post('/upload', (req, resp) => {
  console.log(req.files.file);
  resp.json({
    msg: 'File uploaded',
    name: req.files.file.name,
  });
});

app.listen(3000, () => {
  console.log('server is running');
});
