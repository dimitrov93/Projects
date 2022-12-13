const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/initDB');
const app = express();
// const cors = require("cors");
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');

const cors = require('./middlewares/corseMiddleware');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const taskRoute = require('./routes/task');

app.use((req, res, next) => {
    console.log(`METHOD: ${req.method} >> PATH: ${req.path}`);
    next();
})

app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(auth)

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute);
app.use("/api/tasks", taskRoute);


dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
