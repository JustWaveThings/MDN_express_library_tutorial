require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoDB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.dmc0his.mongodb.net/?retryWrites=true&w=majority`;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
}
