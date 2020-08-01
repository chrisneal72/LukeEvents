const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://lukeevents:<password>@lukeevents.rij6m.mongodb.net/<dbname>?retryWrites=true&w=majority"
MongoClient.connect(uri, function (err, client) {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
  }
  console.log('Connected...');
  const collection = client.db("lukeevents").collection("pages");
  // perform actions on the collection object
  client.close();
});