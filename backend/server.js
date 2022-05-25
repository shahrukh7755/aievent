import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import eventRoutes from "./routes/eventRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";
const __dirname = path.resolve();
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')));
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}else {
    app.get('/',(req,res)=>{
        res.send('Api is running...')
    });
}

// paypal

import paymentRouter from './routes/paymentRoutes.js';
app.use('/api/pay', paymentRouter);

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);



app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);

