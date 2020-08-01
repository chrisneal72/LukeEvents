const mongoose = require("mongoose");


const pageSchema = new mongoose.Schema(
  {
    template: {
      type: String,
      required: [true, "Page must have a template style."],
      trim: true
    },
    title: {
      type: String,
      required: [true, "Page must have a title."],
      trim: true
    },
    topImage: { type: String },
    mainImage: { type: String },
    mapImage: { type: String },
    facebook: { type: String },
    bodyCopy: { type: String },
    facInfo: [
      {
        title: { type: String },
        lines: [{ line: { type: String } }]
      }
    ],
    addInfo: {
      title: { type: String },
      button: {
        title: { type: String },
        path: { type: String }
      },
      "info": [
        {
          type: { type: String },
          title: { type: String },
          path: { type: String },
          lines: [{ line: { type: String } }]
        }
      ]
    },
    addImages: [
      {
        smPath: { type: String },
        lgPath: { type: String },
        altText: { type: String }
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;