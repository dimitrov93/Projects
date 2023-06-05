const express = require("express");
const app = express();
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const { dbInit } = require("./config/initDb");
const cors = require('cors')
dbInit()

app.get("/", (req,res) => {
    console.log('Logged into back-end successfully');
    res.send('Welcome to e-commerce backend!')
})

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/products', productsRoute)
app.use('/api/cart', cartRoute)
app.use('/api/order', orderRoute)


app.listen(process.env.PORT || 5000, () => console.log(`Server started on port ${process.env.PORT || 5000}`));
