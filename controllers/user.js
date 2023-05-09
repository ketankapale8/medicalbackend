// import express from 'express';
// import { getUsers , createUser, getUsersByName } from '../models/users.js';
import {getUsers , createUser , getUsersByName} from '../models/users.js'

export const addUsers = async (req , res) =>{
    try{
        const {CustomerName ,GSTNO , RegNo , PAN , Zone , State , District , City , Address , Contact1 , Contact2 , PrimaryContact , Mobile , Email ,Gumasta , PermanentAccNo , MCI , IEC , BankDetails  } = req.body;
       if (!CustomerName || !GSTNO || RegNo || PAN){
        return res.sendStatus(400)
       }
       const existingUser = await getUsersByName(CustomerName);
       if(existingUser){
        return res.sendStatus(400);
       }

       const user = await createUser({
        CustomerName ,
        GSTNO,
        RegNo,
        PAN , 
        Zone,
        State,
        District,
        City,
        Address,
        Contact1,
        Contact2,
        PrimaryContact,
        Email,
        Mobile,
        Gumasta,
        PermanentAccNo,
        MCI,
        IEC,
        BankDetails 
       })

       return res.sendStatus(200).json(user); 
    }catch(err){
        console.log(err);
        return res.sendStatus(400)
    }
}

export const allUsers = async (req , res) =>{
    try{
        const all = await getUsers();
        return res.status(200).json({'msg':'allCustomers', data: all})
    }catch(err){
        console.log(err)
    }
}