const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

exports.dbInit = () => {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    
    return mongoose.connection.on('open', () => console.log('DB is connected!'));
}