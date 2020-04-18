var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hola Mars!\n\n Openshift de\n Mario Timofte\n');
  res.send('\n Mario ha modificado con exito Los paramentros de MARS\n')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

