const express = require("express");
const path = require("path");
const app = express();
// var mongoose = require("mongoose");
// const bodyparser =  require("body-parser");
// mongoose.connect('mongodb://local/host/spgymcontact', { useNewUrlParser: true },{ useUnifiedTopology: true });
const port = 9000;
// var contactSchema = new mongoose.Schema({
//     name: String,
//     address: String,
//     phone: String,
//     email: String,
//     Textarea: String
// });

// var Contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req, res)=>{
    res.status(200).render('home.pug');
});

app.get('/aboutus', (req, res)=>{
    res.status(200).render('aboutus.pug');
});

app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
});

app.get('/ourwork', (req, res)=>{
    res.status(200).render('ourwork.pug');
});

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("I got your information and i will contact you soon")
    }).catch(()=>{
        res.status(404).send('ooppss... your information not saved');
    });
});

app.listen(port ,()=>{
    console.log('started')
});

