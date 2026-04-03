const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/initDB');
const app = express();
// const cors = require("cors");
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');
const cors = require('cors');

const headerRoute = require('./routes/header');
const authRoute = require('./routes/auth');
const portfolioRoute = require('./routes/portfolio');
const testimonialRoute = require('./routes/testimonial');



app.use((req, res, next) => {
    console.log(`METHOD: ${req.method} >> PATH: ${req.path}`);
    next();
})

app.use(cors(({origin: ["https://dimitrov93.eu", "https://dimitrov93.netlify.app", "http://localhost:3000"], credentials: true})))
app.use(express.json())
app.use(cookieParser());
app.use(auth)

app.use("/api/auth", authRoute)
app.use('/api/header', headerRoute)
app.use('/api/portfolio', portfolioRoute)
app.use('/api/testimonials', testimonialRoute)

dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
