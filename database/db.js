import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = async () => {

    const MONGO_URI = "mongodb+srv://Hema2320:Hema2320@cluster0.kag8j.mongodb.net/examples";
   
    try{
    await  mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;