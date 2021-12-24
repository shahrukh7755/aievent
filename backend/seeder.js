import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import events from './data/events.js';
import users from './data/users.js';
import Event from './models/eventModel.js';
import user from './models/userModel.js';
import registration from './models/registrationModel.js';
import connectDB from './config/db.js'
import User from './models/userModel.js';
import Registration from './models/registrationModel.js';

dotenv.config();
connectDB();


const importData = async () =>{
   try {

    await User.deleteMany();
    await Event.deleteMany();
    await Registration.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleEvents = events.map((event)=>({...event, user: adminUser}));

    await Event.insertMany(sampleEvents);
    console.log("Data Imported!".green.inverse);
    process.exit();

    } catch(err){
        console.error(`Error: ${err.message}` .red.inverse)
        process.exit(1);

    }
}




const destroyData = async () =>{
    try {
 
     await User.deleteMany();
     await Event.deleteMany();
     await Registration.deleteMany();
 
     console.log("Data Destroyed!".red.inverse);
     process.exit();
 
     } catch(err){
         console.error(`Error: ${err.message}` .red.inverse)
         process.exit(1);
 
     }
 }


if(process.argv[2]=== '-d'){
    destroyData()
}else{
    importData();
}