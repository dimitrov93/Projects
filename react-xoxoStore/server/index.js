const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/initDB');
const app = express();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const cors = require("cors");

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)


dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
