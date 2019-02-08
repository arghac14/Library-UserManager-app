var fs=require('fs');

module.exports={
    addUserPage : function(req,res){
        res.render('addData.ejs',{
            title:'argha'
        });
    },

    addUser: function(req,res) {
        let name=req.body.name;
        let stid=req.body.roll;
        let books=req.body.books;

        let addQuery="INSERT INTO `users` (name,stid,boos) VALUES('" + name + "','" + stid + "','" + books + "')";
        db.query(addQuery,function(err,result){
            if(err){
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },

    editUserPage: function(req,res){
        let userId = req.params.id;
        let editQuery = "SELECT * FROM `users` WHERE id = '" + userId + "' ";
        
        db.query(editQuery,function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('editData.ejs', {
                title: "Edit  Player",
                user : result[0]
                
            });
        });
    },
    editUser: function(req,res){
        let userId=req.params.id;
        let name=req.body.name;
        let stid=req.body.roll;
        let books=req.body.books;

        // let addQuery1="UPDATE `users` SET `name` = '" + name + "', `stid` = '" + stid + "', `boos` = '" + books +  "' WHERE `users`.`id` = '" + userId + "'";
       let addQuery1= "UPDATE users SET name= '" + name +"' , stid='" + stid + "', boos='" + books + "' WHERE id= '" + userId + "'";
        db.query(addQuery1,function(err,result){
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
        
    },

    deleteUser: function (req,res) {
       let userId=req.params.id;
       
       let delQuery="DELETE FROM users WHERE id = '" + userId + "'";
       db.query(delQuery,function(err,result){
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
       });
    }
  
};