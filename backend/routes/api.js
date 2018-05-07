var express = require('express');
var router = express.Router();

router.post('/device_reg', function(req, res, next) {
  var device_id = req.body.device_id,
      device_passwd = req.body.device_passwd;
  
});

module.exports = router;
