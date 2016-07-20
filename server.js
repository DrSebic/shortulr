/*
app.get('/:short', function(req, res){
        var short = req.params.short;

         Url.findOne({ shortUrl: short },  function(err, url){
            if(err){
                throw err;
            } 

            if(url){
                console.log(url.originalUrl);
                res.redirect(url.originalUrl);
            } else {
                res.send("No short url in the database");
            }
        }); 
    });
    */