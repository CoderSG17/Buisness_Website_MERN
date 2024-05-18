const z = require("zod");

// creating a schema for strings
const signupSchema = z.object({
    firstname: z
        .string({ required_error: "firstanme is required" })
        .trim()
        .min(3, { message: "firstanme must be of  at least 3 characters" }),

    lastname: z
        .string({ required_error: "lastname is required" })
        .trim()
        .min(3, { message: "lastname must be of  at least 3 characters" }),

    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Email is required" }),

    phone: z
        .string({ required_error: "phoneno. is required" })
        .trim()
        .min(10, { message: "phone must be of  at least 10 numbers" }),

    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(6, { message: "password must be of  at least 6 characters" }),

    confirmpassword: z
        .string({ required_error: "confirmpassword is required" })
        .trim()
        .min(6, { message: "confirmpassword must be of same length as of password" })
});

module.exports = signupSchema