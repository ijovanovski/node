"use strict"


module.exports= function(app, server ){

    app.use("/api", require("./routes/starter-service")())
    
}