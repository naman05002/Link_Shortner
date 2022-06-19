const { response } = require('express');
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to database
connectDB();

app.use(express.json({extended: false}));
const PORT = process.env.PORT || 5000;

//define routes
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

app.listen(PORT, function (){
    console.log(`Server running on port ${PORT}`);
})
// document.createElement(tagName)
// async function postData(url='',data = {}){
//     const reponse = await fetch(url,{
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

// postData('http://localhost:5000/api/url/shorten',{
//     "longUrl": "https://www.amazon.in/Samsung-Storage-Adapter-Purchased-Separately/dp/B09XJ5LD6L/ref=sr_1_13?crid=120J4UL48DZCU&keywords=samsung+mobile&qid=1654959508&s=electronics&sprefix=sam%2Celectronics%2C299&sr=1-13"
// }).then(data => {
//     console.log(data);
// });