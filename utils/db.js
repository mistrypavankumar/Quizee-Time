import mongoose from "mongoose";

const connection = {};

async function connect() {
  // checking whether we had connected or not
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }

    await mongoose.disconnect();
  }

  // connnecting to mongoose database
  const db = await mongoose.connect(process.env.MONGOODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("New connection");
  connection.isConnected = db.connections[0].readyState;
}

// disconnecting the server of database
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  // doc.createdAt = doc.createdAt.toString();
  // doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
