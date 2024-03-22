const express = require('express')
const cors = require('cors')
const carteRoutes  = require('./Routes/carteRoutes')
const app = express()
const PORT = 8000
const userRoutes = require('../backend/Routes/user');
const articleRoutes = require('./Routes/article')
const iframe = require('./Routes/iframe')
const walletRoutes = require ('./Routes/wallet')
const admin = require ('./Routes/userAdmin')
const path = require('path');

app.use(cors())
app.use(express.json())


const notifyKey = "YOUR_notifyKey_KEY"; //TOCHANGE

let notification = {title: "Hi", body: "Thank you"};
app.get('/notification', (req, res) => {

    console.log("notification requested");
    res.send(JSON.stringify(notification));
});
app.get('/notify', (req, res) => {
    const {title, body, key} = req.query;
    if (key === notifyKey) {
        notification.title = title;
        notification.body = body;
        console.log("notification updated");
    } else {
        console.log("wrong key");
    }
    res.send("notification updated");
});

app.use(express.static('set_notification'));

app.get('/set_notification', (req, res) => {
    res.sendFile(path.join(__dirname, 'set_notification', 'index.html'));
});

app.use('/carte', carteRoutes);
app.use('/users', userRoutes)
app.use('/article', articleRoutes)
app.use('/iframe', iframe)
app.use('/wallet', walletRoutes);
app.use('/admin',admin)



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
