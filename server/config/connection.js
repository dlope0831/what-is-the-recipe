import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config("..")

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/what-is-the-recipe',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
  );

  export const conn =  mongoose.connection;