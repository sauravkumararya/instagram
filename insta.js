
const ipp = require('instagram-profile-picture');

var http = require('http');


http.createServer(function (req, res) {
  console.log(req.url);
  var u = req.url.replace(/[/]/g , '');
  console.log(u) 
ipp(u).then(user => {
 
  //console.log(req.url);
  res.writeHead(200,{'Content-Type':'text/html'})

res.write('<img src="'+user+'"/>')
res.end(); 

 

});
    

}).listen(8081);

