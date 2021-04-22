const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    hostName: { type: String },
    participantName: {type: String},
    startTime: {type: String},
    endTime: {type: String},
    status: {type:String},
    createdBy:{type:String},
});

// Validation on SChema
UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('meeting', UserSchema);