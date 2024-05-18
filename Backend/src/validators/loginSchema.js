//Note -- login ke liye alag schema ki jagah we could also use .extend property of zod 
//loginSchema = z.object ...
    // email,
    // password,
// signupSchema = loginSchema.extend ...
        //firstname,
        //lastname,
        //phone ,
        //confirmpassword

const z = require("zod");

const loginSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Email is required" })
,
    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(6, { message: "password must be of  at least 6 characters" })
});

module.exports = loginSchema