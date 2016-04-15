
var express = require("express"); 
var app = express();

app.set('port' ,(process.env.PORT || 5000));
app.use(express.static(__dirname+'/static'))

app.use('/', function(req, res){
	res.render('index.html');
});

app.listen(app.get('port'), function(){
	console.log('node running on port ', app.get('port'));
});
