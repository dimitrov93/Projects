const express = require("express");
const app = express();
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth');
const { dbInit } = require("./config/initDb");

dbInit()

app.get("/", (req,res) => {
    console.log('Logged into back-end successfully');
    res.send('Welcome to e-commerce backend!')
})

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)


app.listen(process.env.PORT || 5000, () => console.log(`Server started on port ${process.env.PORT || 5000}`));
