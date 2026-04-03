const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },

  },
  { timestamps: true }
);

const Header = mongoose.model('Header', headerSchema);

module.exports = Header;