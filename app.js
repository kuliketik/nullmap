
var express = require("express"); 
var app = express();

app.set('port' (process.env.PORT || 5000);
app.set('views', __dirname+'/static'));

app.get('/', funtion(req, res){
	res.render('static/index.html')
});

app.listen(app.get('port'), function(){
	console.log('node running on port ', app.get('port'));
});
