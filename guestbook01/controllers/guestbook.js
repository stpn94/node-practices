const model = require('../models/guestbook');



module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    
    add: async function(req, res) {

        const results = await model.insert(req.body);
        console.log(results);;
        res.redirect("/");
    },
    deleteform: function(req, res) {   
      

        res.render('deleteform' , {
            no : req.params.no || []
        });
        console.log(req.params.no);
        req.query.no 
    },
    delete: async function(req, res) {
       
        
        
        const results = await model.delete(req.body);
        console.log(results);;
        res.redirect("/");
    }
}