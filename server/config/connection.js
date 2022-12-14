import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config("..")

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/what-is-the-recipe',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
  );

  export const conn =  mongoose.connection;