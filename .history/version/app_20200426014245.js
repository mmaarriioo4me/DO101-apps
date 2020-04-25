const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'Esta es la verion <<<< 5 >>>> de aplicacion version, en la rama-versionado.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
