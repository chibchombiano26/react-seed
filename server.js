import express from 'express';

let app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, process.env.IP);
