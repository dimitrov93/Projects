const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://github.com/dimitrov93/my-resume/blob/main/react-portfolio/src/assets/avatar1.jpg?raw=true",
    },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
