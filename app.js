import express from 'express';
import UserRouter from './routes/User.js';
import SupplierRouter from './routes/Supplier.js';
import MrRouter from './routes/Mr.js';
// import cookieParser from 'cookie-parser';
// import fileUpload from 'express-fileupload';
import cors from 'cors'

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use(cookieParser());
// app.use(fileUpload({
//     limits:{
//         fileSize : 50 * 1024 * 1024
//     },
//     useTempFiles: true
// }))

app.use(cors())

app.use('/api/v1', UserRouter);
app.use('/api/v1', SupplierRouter);
app.use('/api/v1', MrRouter);

app.get('/', (req,res)=>{
    res.send('Running MedicalApp Backend..')
})

