// load environment variables
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
// used to keep stripe secret key secret, not shown in code. Make sure to include .env where that is stored in .gitignore
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

console.log(stripePublicKey, stripeSecretKey)

// creating a server with express framework
const express = require('express')
const app = express()
// used for file handling
const fs = require('fs')
// used for charging the users' credit card
const stripe = require('stripe')(stripeSecretKey)

// set view engine, allows us to imbed server side code in front end
app.set('view engine', 'ejs')
// tells our app that we can parse the body element as json and that we can access its properties as if it was a json object
app.use(express.json())
// allow use of files in public folder
app.use(express.static('public'))

app.get('/store', function(req, res) {
    fs.readFile('items.json', function(error, data) {
        if(error) {
            res.status(500).end()
        } else {
            res.render('store.ejs', {
                stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
})

app.post('/purchase', function(req, res) {
    fs.readFile('items.json', function(error, data) {
        if(error) {
            res.status(500).end()
        } else {
            const itemsJson = JSON.parse(data)
            // put music and merch into same array to find items by id
            const itemsArray = itemsJson.music.concat(itemsJson.merch)
            let total = 0
            // output json for item when it finds a match in items so we can access its price
            req.body.items.forEach(function(item) {
                const itemJson = itemsArray.find(function(i) {
                    return i.id == item.id
                })
                total = total + itemJson.price * item.quantity
            })
            // returns a promise
            stripe.charges.create({
                // stripe uses cents instead of dollar, just like our code
                amount: total,
                source: req.body.stripeTokenId,
                currency: 'usd'
            // if the charge is successful
            }).then(function() {
                console.log('Charge successful')
                // send json to front end
                res.json({ message: 'Successfully purchased items' })
            // if there is an error and charge is not successful
            }).catch(function() {
                console.log('Charge failed')
                res.status(500).end()
            })
        }
    })
})

app.listen(3000)