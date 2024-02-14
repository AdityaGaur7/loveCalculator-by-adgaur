// const express = require("express");
// const app = express();
// const bodyparser = require("body-parser"); 
// var mongoose = require('mongoose');

// app.use(bodyparser.urlencoded({extended:true}));

// app.use(express.static('public'));  

// app.get("/next",function(req,res){
//     res.sendFile(__dirname+ "/next.html")
// })
// const crushdb = "mongodb+srv://adkumar7112:adgaur7112@cluster0.iw4txgj.mongodb.net/crushdata";
// const db = "mongodb://127.0.0.1:27017/crush";
// mongoose.connect(crushdb,{ useNewUrlParser: true , useUnifiedTopology: true })
//         .then(()=>console.log("Connected to database"))
//         .catch((err)=> console.log(err));


// const crushSchema = {
//     Name:String,
//     Crush:String
// }
// const data = mongoose.model("data",crushSchema);

// app.get("/",function (req,res) {
//     res.sendFile(__dirname + "/index.html") ;
// })
// app.post("/",async function(req,res){
//     let newData = new data({Name : req.body.nm ,Crush : req.body.crsh});
//    await newData.save();
//     console.log(newData);
//     res.redirect('/next')
// })



// // app.get("/naruhina", async function(req, res) {
// //     try {
// //         const allData = await data.find();
// //         res.json(allData);
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).send("Error fetching data.");
// //     }
// // });



// app.get("/alldata", async function(req, res) {
//     try {
//         const allData = await data.find();
//         res.json(allData);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error fetching data.");
//     }
// });

// app.get("/naruhina", async function(req, res) {
//     try {
//         const allData = await data.find();
//         const tableRows = allData.map(entry => `<tr><td>${entry.Name}</td><td>${entry.Crush}</td></tr>`).join('');
//         const dataHtml = `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Data</title>
//                 <style>
//                 *{
//                     font-family: sans-serif;
//                 }
//                     table {
//                         border-collapse: collapse;
//                         width: 100%;
//                     }
//                     h1{
//                         color:white;
//                     }
//                     th, td {
//                         border: 2px solid black;
//                         text-align: left;
//                         font-size:20px;
//                         padding: 8px;
//                     }
//                     th {
//                         background-color: #f2f2f2;
//                     }
//                     body {
//                         background-color: #555; /* Gray background */
//                         color: #fff; /* White text color */
//                     }
                    
//                     table {
//                         border-collapse: collapse;
//                         width: 100%;
//                         background-color: #444; /* Dark gray background for table */
//                     }
                    
//                     th, td {
//                         padding: 12px;
//                         text-align: left;
//                     }
                    
//                     th {
//                         background-color: white; /* Dark gray background for table header */
//                         color: black; /* Light gray text color for table header */
//                     }
                    
//                     tbody tr:nth-child(even) {
//                         background-color: #555; /* Dark gray background for even rows */
//                     }
                    
//                     tbody tr:hover {
//                         background-color: #777; /* Lighter gray background on hover */
//                     }
                    
//                     /* Optional: Add some border-radius and padding to the first and last rows for a nicer look */
//                     tbody tr:first-child {
//                         border-top-left-radius: 8px;
//                         border-top-right-radius: 8px;
//                     }
                    
//                     tbody tr:last-child {
//                         border-bottom-left-radius: 8px;
//                         border-bottom-right-radius: 8px;
//                     }
                    
                    
                    
//                 </style>
//             </head>
//             <body>
//                 <h1>All Data</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Crush</th>
//                         </tr>
//                     </thead>
//                     <tbody id="data-table">
//                         ${tableRows}
//                     </tbody>
//                 </table>
//             </body>
//             </html>
//         `;
//         res.send(dataHtml);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error fetching data.");
//     }
// });

























// var Port = 3000 || process.env.PORT;

// app.listen(Port,function(){
//     console.log("server is running om 3000");
// })