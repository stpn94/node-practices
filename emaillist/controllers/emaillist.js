const model = require('../models/emaillist');

module.exports = {
  index: async function (req, res) {
    const results = await model.findAll();
    res.render('index', {
      list: results || [],
    });
  },
  form: function (req, res) {
    res.render();
  },
  add: async function (req, res) {
    console.log(req.body);
    res.redirect('/');
  },
};
