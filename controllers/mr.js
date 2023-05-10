// import express from 'express';
import { getMR , createMR , getMRByName } from '../models/mr.js';

export const addMR = async (req  , res) =>{
    try{
        const {SellingPermit , CompanyRegistrationNo , OfferLetter , MRIdentityProof 
        , PersonalID , AdressProof , ContactNo , ExperienceDetails , EducationalBackground , TeamSize , RelevantLicences ,AdditionalCertificates } = req.body;
    //    if (!CompanyRegistrationNo || !OfferLetter || MRIdentityProof || SellingPermit){
    //     return res.sendStatus(400)
    //    }
       const existingUser = await getMRByName(CompanyRegistrationNo);
       if(existingUser){
        return res.sendStatus(400);
       }

       const user = await createMR({
        SellingPermit , CompanyRegistrationNo , OfferLetter , MRIdentityProof 
        , PersonalID , AdressProof , ContactNo , ExperienceDetails , EducationalBackground , TeamSize , RelevantLicences ,AdditionalCertificates
       })

       return res.send(200).json(user); 
    }catch(err){
        console.log(err);
        return res.send(400).json({'err':err})
    }
}

export const allMRs = async (req  , res) =>{
    try{
        const all = await getMR();
        return res.status(200).json({'msg':'allMR', data: all})
    }catch(err){
        console.log(err)
    }
}