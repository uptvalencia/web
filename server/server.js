//const http = require('http');
const express = require('express');
//const host = '192.168.1.100';
//const port = 3000;
//const server = http.createServer();
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('host', '192.168.1.100');

app.get('/', (req, res) => {
    res.send('Hello word');
});
app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Servidor corriendo en http://${app.get('host')}:${app.get('port')}`);
});
