

module.exports = function(app) {
  var router; 
  var students = {};
  
  router = app.loopback.Router();
  
  app.use(router);
  


  router.get('/ping', function(req, res) {
    res.send('pong');
  });

  router.get('/students', function (req, res) {
    res.send(req.headers);
    console.log(res.statusCode,res.statusMessage);
  });
};