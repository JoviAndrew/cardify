const pdfcrowd = require("pdfcrowd");

// create the API client instance
const client = new pdfcrowd.HtmlToPdfClient("agung_caproex", "250e48639e6050d6839fafe9e900c420");

// run the conversion and write the result to a file
// client.convertFileToFile(
//     "/home/gonfreecs/HACKTIV8/Phase2/Week2/ecommerce-layout/client/home.html",
//     "MyLayout.pdf",
//     function(err, fileName) {
//         if (err) return console.error("Pdfcrowd Error: " + err);
//         console.log("Success: the file was created " + fileName);
//     });


// run the conversion and write the result to a file
client.convertUrlToFile(
    "http://bucket.cardify-hacktiv.xyz/",
    "example.pdf",
    function(err, fileName) {
        if (err) return console.error("Pdfcrowd Error: " + err);
        console.log("Success: the file was created " + fileName);
    });

// run the conversion and write the result to a file
// client.convertStringToFile(
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <title>Bootstrap Example</title>
//       <meta charset="utf-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1">
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
//       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
//     </head>
//     <body>
    
//     <div class="container">
//       <h2>Black/Dark Table</h2>
//       <p>The .table-dark class adds a black background to the table:</p>            
//       <table class="table table-dark">
//         <thead>
//           <tr>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>John</td>
//             <td>Doe</td>
//             <td>john@example.com</td>
//           </tr>
//           <tr>
//             <td>Mary</td>
//             <td>Moe</td>
//             <td>mary@example.com</td>
//           </tr>
//           <tr>
//             <td>July</td>
//             <td>Dooley</td>
//             <td>july@example.com</td>
//           </tr>
//         </tbody>
//       </table>
//       <div>
//           <img src="https://www.pindad.com/uploads/images/product/full/SS2-V4HB.jpg" alt="">
//       </div>
//     </div>
    
//     </body>
//     </html>
//     `,
//     "HelloWorld.pdf",
//     function(err, fileName) {
//         if (err) return console.error("Pdfcrowd Error: " + err);
//         console.log("Success: the file was created " + fileName);
//     });