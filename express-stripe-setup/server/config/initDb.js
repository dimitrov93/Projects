const mongoose = require("mongoose");

exports.dbInit = () => {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

  return mongoose.connection.on("open", () => console.log("DB is connected!"));
};
