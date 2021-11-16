const express = require('express');

const router = express.Router();
router.route('').get(function (req, res) {
  res.render('user/info', {
    no: req.query.no || 0, // no가 req.query.no 를 쓰는 데 없으면 0을 쓴다.
  });
});

router.route('/info/:no').get(function (req, res) {
  res.render('user/info', {
    no: req.params.no || 0, //params를 써야함
  });
});

router.route('/join').get(function (req, res) {
  res.render('user/join', {});
});

router.route('/join').post(function (req, res) {
  console.log(req.body);
  res.render('user/join', {});
});

router.route('/api').get(function (req, res) {
  const vo = {
    no: 10,
    name: '둘리',
    email: 'dooly@gmail.com',
    gender: 'male',
  };
  // res.writeHead(200, {
  //   'Content-Type': 'application/json',
  // });
  // res.end(JSON.stringify(vo));
  res.send(vo);
});

module.exports = router;

// exports.helloRouter = helloRouter;
