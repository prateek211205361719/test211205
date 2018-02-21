

const keys = require('../config/keys');
var stripe = require("stripe")(
    keys.stripeSecretKey
);  
module.exports = (app) => {
    app.post('/api/stripe', isUserLogin, async (req, res) => {
        var body = req.body;
        var charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: body.id, // obtained with Stripe.js
            description: "Charge for me"
          });
           req.user.credits += 5;
           console.log(req.user);
           const user = await req.user.save();
           res.send(user);

    });
}

function isUserLogin(req, res, next){
    if(!req.user){
        res.status(401).send('Please login');
    }
    next();
}