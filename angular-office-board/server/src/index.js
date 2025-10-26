const express = require('express');
const { PORT } = require('./config/env');
const { dbInit } = require('./config/initDB');
const app = express();
// const cors = require("cors");
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');

const cors = require('cors');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const taskRoute = require('./routes/task');
const messageRoute = require('./routes/msg');

app.use((req, res, next) => {
    console.log(`METHOD: ${req.method} >> PATH: ${req.path}`);
    next();
})

app.use(cors(({origin: ["https://office-board.web.app", "http://localhost:3000", "http://localhost:4200"], credentials: true})))
app.use(express.json())
app.use(cookieParser());
app.use(auth)

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/tasks", taskRoute);
app.use("/api/messages", messageRoute);


dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
