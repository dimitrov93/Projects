const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/initDB');
const app = express();
const userRoute = require('./routes/user');

app.use(express.json())
app.use("/api/users", userRoute)


dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
