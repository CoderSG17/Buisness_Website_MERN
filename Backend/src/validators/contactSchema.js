const z = require("zod");

// creating a schema for strings
const contactSchema = z.object({
    firstname: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be of  at least 3 characters" }),

    lastname: z
        .string({ required_error: "lastname is required" })
        .trim()
        .min(3, { message: "lastname must be of  at least 3 characters" }),

    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Enter correct email " })
        .min(3, { message: "email must be of  at least 3 characters" }),
    message: z
        .string({ required_error: "message is required" })
        .trim()
        .min(2, { message: "message must be of  at least 2 characters" })
        .max(500, { message: "message must not exceed 500 words" })

});

module.exports = contactSchema