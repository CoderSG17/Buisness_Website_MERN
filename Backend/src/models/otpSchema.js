const { Schema, model } = require("mongoose");
const otpSchema = new Schema({
    email: { type: String, required: true },
    code: { type: String, required: true  },
    expiresIn:{ type: Number, required: true  },
});
// create a new collections(Model) 
const otp = new model("otp", otpSchema,'otp');
module.exports = otp;  