const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: " Email Already Exist" },
    contact: { type: String, unique: " Contact Already Exist" },
    status:{type: String},
    createdby:{type:String},
    password: { type: String },
    userType: { type: Number, ref: 'user_types' },
});

// Validation on schema
UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', UserSchema);