const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./databases');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('host', '192.168.1.100');

//Middlewares
app.use(morgan('dev'));
app.use(express.static('../dist/web-uptvalencia'));
app.use(express.json());

// Routes
 app.use('/api/students', require('./routes/student.routes'));
 
//Starting on Server
app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Servidor corriendo en http://${app.get('host')}:${app.get('port')}`);
  });