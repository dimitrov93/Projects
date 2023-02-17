const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/initDB');
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const emailRoute = require('./routes/email');


app.use(cors(({origin: ["https://xoxostore-7ef9a.web.app", "http://localhost:3000", "http://localhost:4200"], credentials: true})))
app.use(express.json())
app.use(cookieParser());
app.use(auth)
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute);
app.use("/api/email", emailRoute);


dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
