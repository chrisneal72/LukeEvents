const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const connection = await mongoose.connect(
    process.env.MONGODB_CLOUD_URI || "mongodb://localhost/lukeevents",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );

  console.log(`MongoDB connected to ${connection.connection.host}.`);
};

module.exports = connectToDatabase;