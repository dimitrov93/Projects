const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
        type: mongoose.Schema.Types.Mixed,
        required: true    
    },
    github: {
      type: String,
    },
    demo: {
        type: String,
      },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;