module.exports={
    showUser: function (req,res) {
        let query="SELECT * FROM `users` ORDER BY id ASC";
            db.query(query,function(err,result,fields){
                if(err){
                    res.redirect('/');
                }
                res.render('index.ejs',{
                    info: result,
                    title: "argha"
                });
    });
}
};