var express = require('express');
var app = express();

app.use('/analytics', express.static('dist'));
app.use(express.static('dist'));
app.use('/*', express.static('dist/index.html'));
app.get('/test', function(req, res) {
    res.jsonp({status: true});
});

app.listen(8080, function () {
    console.log('app listening on port 8080!!')
});