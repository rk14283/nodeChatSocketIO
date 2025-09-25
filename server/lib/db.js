import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config(); 


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }

//  console.log(process.env.mongoURI)
};

