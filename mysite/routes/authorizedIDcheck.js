module.exports = function(idCheck) {
    return function(req, res, next) {
      

        if(req.session.authUser && (idCheck !== 'true' || req.session.authUser.email === undefined)){
            next();
            return;
        }

       

        if(req.accepts('html')) {
            res.redirect(req.session.authUser ? '/' : '/user/login');
            return;
        }

        res.status(403).send({
            result: "fail",
            data: null,
            message: "Access Denied"
        });
    }
}
