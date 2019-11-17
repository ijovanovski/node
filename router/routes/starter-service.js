"use strick"
var express = require("express");
var config= require("../../config.js");
var sql = require("mssql");

module.exports = function () {
    var app = express.Router();
    
    app.get('/users', function (req, res) {
          
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().execute('SelectAll')
          }).then(result => {
            let rows = result.recordset
            console.log(rows);
           // res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
            sql.close();
          }).catch(err => {
            console.log(err)
            res.status(500).send({ message: "${err}"})
            sql.close();
          });
    
    
    });

    app.get('/city', function (req, res) {
          
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().input('City', sql.VarChar, req.input).execute('SearchCity')
          }).then(result => {
            let rows = result.recordset
            console.log(rows);
           // res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
            sql.close();
          }).catch(err => {
            console.log(err)
            res.status(500).send({ message: "${err}"})
            
            sql.close();
          });
    
    
    });

    app.get('/person', function (req, res) {
          
      new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().input('City', sql.int, req.input).execute('SearchPerson')
        }).then(result => {
          let rows = result.recordset
          console.log(rows);
         // res.setHeader('Access-Control-Allow-Origin', '*')
          res.status(200).json(rows);
          sql.close();
        }).catch(err => {
          console.log(err)
          res.status(500).send({ message: "${err}"})
          
          sql.close();
        });
  
  
  });

  app.get('/id', function (req, res) {
          
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().input('BusinessEntityID', sql.Int, 33).execute('SearchPerson')
      }).then(result => {
        let rows = result.recordset
        console.log(rows);
       // res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(rows);
        sql.close();
      }).catch(err => {
        console.log(err)
        res.status(500).send({ message: "${err}"})
        

        sql.close();
      });

      app.get('/id', function (req, res) {
          
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().input('BusinessEntityID', sql.Int, 33).execute('SearchPerson')
          }).then(result => {
            let rows = result.recordset
            console.log(rows);
           // res.setHeader('Access-Control-Allow-Origin', '*')
            res.status(200).json(rows);
            sql.close();
          }).catch(err => {
            console.log(err)
            res.status(500).send({ message: "${err}"})
            
            sql.close();
          });
    

});


});

    
    return app;

};
