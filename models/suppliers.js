import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    SupplierName : {
        type : String,
        required : true
    }, 
    GSTNO : {
        type : String,
        required : false

    },
    CIN : {
        type : String,
        required : false
    },
    PAN : {
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
    GstCertificate : {
        type : String,
        required : false
    },
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
    InsuranceCertificate : {
        type : String,
        required : false
    },
    AdditionalCertificate : {
        type : String,
        required : false
    },
    BankDetails : {
        type : String,
        required : false
    },
    EquipmentCode : {
        type : String,
        required : false
    },
    Category : {
        type : String,
        required : false
    },
    // Image : {
    //     type : String,
    //     required : false
    // },
    ZoneCode : {
        type : String,
        required : false
    },
    StateCode : {
        type : String,
        required : false
    },
    DistrictCode : {
        type : String,
        required : false
    },
    MNCCountryCode : {
        type : String,
        required : false
    },
    MNCCountryName : {
        type : String,
        required : false
    },
    ProductCode : {
        type : String,
        required : false
    },
    ItemName : {
        type : String,
        required : false
    },
    Manufacturer : {
        type : String,
        required : false
    },
    UnitOfMeasurement : {
        type : String,
        required : false
    },
    GenericName : {
        type : String,
        required : false
    },
    PackSize : {
        type : String,
        required : false
    },
    Specifications : {
        type : String,
        required : false
    },
    SupplierLink : {
        type : String,
        required : false
    },
    // ProductImage : {
    //     type : String,
    //     required : false
    // },
    BrandName : {
        type : String,
        required : false
    },
    HSN : {
        type : String,
        required : false
    },
    QuoteItemName : {
        type : String,
        required : false
    },
    QuoteZone : {
        type : String,
        required : false
    },
    QuoteState : {
        type : String,
        required : false
    },
    QuoteDistrict : {
        type : String,
        required : false
    },
    QuoteQuantity : {
        type : String,
        required : false
    },

}

) ;

export const SupplierModal = mongoose.model('Supplier' , SupplierSchema);
export const getSupplier = () => SupplierModal.find();
export const getSupplierByName = (SupplierName) => SupplierModal.findOne({SupplierName});
export const createSupplier = (values) => new SupplierModal(values).save().then((user)=> user.toObject())
export const deleteSupplierbyId = (id) => SupplierModal.findOneAndDelete({_id : id});
export const updateSupplierbyId = (id  , values) => SupplierModal.findOneAndUpdate({id , values});