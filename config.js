  //config for your database
//   module.exports = {
//     authentication: {
//       options: {
//           userName: 'ijovanovski', // update me
//           password: 'linknetx2' // update me
//       },
//     // userName: 'ijovanovski',
//     // password: 'linknetx2',
//      server: "linknet.database.windows.net", 
//      database: 'AdventureWorks2017',
//      encrypt:true,
//      dialect: "mssql",
//      trustedConnection: true,
//     dialectOptions: {
//     instanceName: "SQLEXPRESS"
// }
//     }
//   }
  

  module.exports = {
    user: 'ijovanovski',
    password: 'Linknetx2',
    server: 'linknet.database.windows.net', 
     database: 'AdventureWorks2017',
     encrypt:true,
     dialect: "mssql",
     trustedConnection: true,
     dialectOptions: {
    instanceName: "SQLEXPRESS"
}
  }

