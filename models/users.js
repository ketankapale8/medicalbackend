import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    CustomerName : {
        type : String,
        required : true
    }, 
    GSTNO : {
        type : String,
        required : false
    },
    RegNo : {
        type : String,
        required : false
    },
    
    Zone : {
        type : String,
        required : false
    },
    State : {
        type : String,
        required : false
    },
    District : {
        type : String,
        required : false
    },
    City : {
        type : String,
        required : false
    },
    Address : {
        type : String,
        required : false
    },
    Contact1 : {
        type : String,
        required : false
    },
    Contact2 : {
        type : String,
        required : false
    },
    PrimaryContact : {
        type : String,
        required : false
    },
    Mobile : {
        type : String,
        required : false
    },
    Email : {
        type : String,
        required : false
    },
    // GstCertificate : {
    //     type : String,
    //     required : false
    // },
    Gumasta : {
        type : String,
        required : false
    },
    PermanentAccNo : {
        type : String,
        required : false
    },
    MCI : {
        type : String,
        required : false
    },
    IEC : {
        type : String,
        required : false
    },
    // InsuranceCertificate : {
    //     type : String,
    //     required : false
    // },
    // AdditionalCertificate : {
    //     type : String,
    //     required : false
    // },
    BankDetails : {
        type : String,
        required : false
    }


}) ;

export const UserModal = mongoose.model('User' , UserSchema);
export const getUsers = () => UserModal.find();
export const getUsersByName = (CustomerName) => UserModal.findOne({CustomerName});
export const createUser = (values) => new UserModal(values).save().then((user)=> user.toObject())
export const deleteUserbyId = (id ) => UserModal.findOneAndDelete({_id : id});
export const updateUserbyId = (id , values ) => UserModal.findOneAndUpdate({id , values});