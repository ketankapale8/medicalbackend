import mongoose from "mongoose";

const MR = new mongoose.Schema({
    CompanyRegistrationNo : {
        type : String,
        required : true
    }, 
    OfferLetter : {
        type : String,
        required : false

    },
    MRIdentityProof : {
        type : String,
        required : false
    },
    SellingPermit : {
        type : String,
        required : false
    },
    PersonalID : {
        type : String,
        required : false
    },
    AdressProof : {
        type : String,
        required : false
    },
    ContactNo : {
        type : String,
        required : false
    },
    ExperienceDetails : {
        type : String,
        required : false
    },
    EducationalBackground : {
        type : String,
        required : false
    },
    TeamSize : {
        type : String,
        required : false
    },
    RelevantLicences : {
        type : String,
        required : false
    },
    AdditionalCertificates : {
        type : String,
        required : false
    },
}) ;

export const UserModal = mongoose.model('mr' , MR);
export const getMR = () => UserModal.find();
export const getMRByName = (CompanyRegistrationNo) => UserModal.findOne({CompanyRegistrationNo});
export const createMR = (values) => new UserModal(values).save().then((user)=> user.toObject())
export const deleteMRbyId = (id ) => UserModal.findOneAndDelete({_id : id});
export const updateMRbyId = (id , values ) => UserModal.findOneAndUpdate({id , values});