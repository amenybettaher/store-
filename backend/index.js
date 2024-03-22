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


// NOTIFICATIONS SYSTEM: ADD this code to yor backend to set the new notification and send it to all users
// Usage to set new notification: http://192.168.1.14:8000/set-notification
const notifyKey = "YOUR_notifyKey_KEY"; //TOCHANGE

let notification = {title: "Hi", body: "Thank you"};
app.get('/get-notification', (req, res) => {

    // console.log("notification requested");
    res.send(JSON.stringify(notification));
});
app.use(express.urlencoded({ extended: true }));
app.post('/set-notification', (req, res) => {

    const {title, body, key} = req.body;
    if (key === notifyKey) {
        notification.title = title;
        notification.body = body;
        // console.log("notification updated");
    } else {
        console.log("notification system: wrong key");
    }
    
    res.send("notification updated");
    
});

app.get('/set-notification', (req, res) => {
    const sethtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Notification Form</title>
    </head>
    <body>
        <form action="/set-notification" method="post">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" placeholder="title"><br><br>
            
            <label for="body">Body:</label>
            <input type="text" id="body" name="body" placeholder="notification body"><br><br>
            
            <label for="key">Key:</label>
            <input type="text" id="key" name="key" placeholder="YOUR_notifyKey_KEY"><br><br>
            
            <input type="submit" value="Send Notification">
        </form>
        <style>
        body {
                background-color: #282828;
                color: white;
                font-family: sans-serif;
            }
            form {
                background-color: #333;
                padding: 20px;
                border-radius: 10px;
                margin: 20px auto;
                width: 50%;
            }
            label {
                display: block;
                margin-bottom: 5px;
            }
            input {
                width: calc(100% - 20px);
                padding: 10px;
                margin-bottom: 20px;
                border-radius: 5px;
                border: 1px solid #ccc;
            }
            input[type=submit]
        </style>
    </body>
    </html>`
    res.send(sethtml);
});
//END OF NOTIFICATIONS SYSTEM

app.use('/carte', carteRoutes);
app.use('/users', userRoutes)
app.use('/article', articleRoutes)
app.use('/iframe', iframe)
app.use('/wallet', walletRoutes);
app.use('/admin',admin)



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
