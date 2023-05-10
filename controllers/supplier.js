import express from 'express';
import { getSupplier , createSupplier , getSupplierByName } from '../models/suppliers.js';

export const addSupplier = async (req  , res ) =>{
    try{
        const {SupplierName ,GSTNO , CIN , PAN , Zone , State , District , City , Address , Contact1 , Contact2 , PrimaryContact , Mobile , Email ,Gumasta , PermanentAccNo , MCI , IEC , BankDetails,   EquipmentCode,
            Category , ZoneCode ,StateCode , DistrictCode ,  MNCCountryCode , MNCCountryName , ProductCode , ItemName , Manufacturer , UnitOfMeasurement , GenericName,
        PackSize , Specifications , SupplierLink , BrandName , HSN , QuoteItemName , QuoteZone , Quote ,  QuoteDistrict, QuoteQuantity , } = req.body;
    //    if (!SupplierName || !GSTNO || CIN || PAN){
    //     return res.sendStatus(400)
    //    }
       const existingUser = await getSupplierByName(SupplierName);
       if(existingUser){
        return res.sendStatus(400);
       }
       const user = await createSupplier({
        SupplierName ,
        GSTNO,
        CIN,
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
        BankDetails,
        EquipmentCode,
        Category, ZoneCode ,StateCode , DistrictCode ,  MNCCountryCode , MNCCountryName , ProductCode , ItemName , Manufacturer , UnitOfMeasurement , GenericName,
        PackSize , Specifications , SupplierLink , BrandName , HSN , QuoteItemName , QuoteZone , Quote ,  QuoteDistrict, QuoteQuantity
       })

       return res.send(200).json({'supplier':user}); 
    }catch(err){
        console.log(err);
        return res.sendStatus(400)
    }
}

export const allSuppliers = async (req , res) =>{
    try{
        const all = await getSupplier();
        return res.status(200).json({'msg':'allSuppliers', data: all})
    }catch(err){
        console.log(err)
    }
}