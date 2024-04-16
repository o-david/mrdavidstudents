import mongoose from 'mongoose';


export async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}
