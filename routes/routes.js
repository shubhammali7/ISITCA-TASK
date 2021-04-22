module.exports = (app)=>{
    app.get('/', (req, res)=>{
        if(req.session.userName)
            res.redirect(req.session.redirectUrl);
        else
            res.redirect('/auth/logout');
    })

    app.use('/auth', require('./auth'));
    app.use('/manageusers', require('./manageusers'));
    app.use('/meetings', require('./meetings'));  
}