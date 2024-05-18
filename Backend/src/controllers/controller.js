const User = require('../models/userSchema')
const Contact = require('../models/contact')
// const bcrypt = require('bcryptjs')
const Service = require('../models/service')
// const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const otp = require('../models/otpSchema')



const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);

        return res.status(200).json({ userData })
        // return res.status(200).json({msg:"hi user"})


    } catch (error) {
        res.status(404).send(error)
    }
}

const contact = async (req, res) => {
    try {
        const user = req.body;
        await Contact.create(user);
        return res.status(200).json({ message: "message send successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "message not delivered" });
    }
}

const services = async (req, res) => {
    try {
        const user = await Service.find()
        // console.log(user);
        if (!user) {
            res.status(404).send('No service found')
            return;
        }
        else {
            return res.status(200).json({ data: user });
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

const sendMail = async (otp) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'abagail.huel40@ethereal.email',
            pass: 'EXRDmkTZXbw8DQbSDZ'
        }
    });

    let info = await transporter.sendMail({
        from: '"Shray SG 👻" <SG@gmail.com>', // sender address
        to: "iam@gmail.com", // list of receivers
        subject: "Hello SG", // Subject line
        text: `Hello your otp is ${otp}` , // plain text body
        html: `<b>Hello your otp is ${otp}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
};

const emailsendforotp = async (req, res) => {
    try {
        const email = req.body.email;
        console.log(req.body.email);
        // console.log(email);
        const user = await User.findOne({ email })
        // console.log(user);

        if (user) {
            const otpcode = Math.floor(Math.random() * 900000) + 100000; 
            console.log(otpcode);
            // sendMail(otpcode)   


            const otpData = new otp({
                email: req.body.email,
                code: otpcode,
                expiresIn: new Date().getTime() + 300 * 1000,//300sec -> 5min
            })
            console.log("yeh hai otp ka data: " + otpData);

            let otpResponse = await otpData.save()
            console.log("otp ka response"+otpResponse);
            res.status(200).json({ data: otpData});
        }
        else {
            res.status(400).json({ message: "Email does not found" });
        }
    } catch (error) {
        res.status(400).send(error)
    }

}

const changepassword = async(req, res) => {
    console.log(req.body);
    // const jsonData = (req.body);
    // console.log("json data"+jsonData);
    try {
        // console.log('changepassword side se ' + req.body);
        // console.log(req.headers)
        const email = req.body.email
        const code = req.body.otp

        let data = await otp.findOne({ email, code:code})
        console.log("data match krke jo mila " +data);

        if (data) {
            let currTime = new Date().getTime();
            let diff = data.expiresIn - currTime
            if (diff < 0) {
                res.status(400).json({msg:"OTP expired"});

            }
            else {
                let user = await User.findOne({ email: req.body.email })
                user.password = req.body.password
                user.save()
                res.status(200).json({msg:"Password updated"});

            }
        }
        else {
            res.status(400).json({msg:"Invalid otp "});

        }

    }
    catch (error) {
        res.status(400).send("error");

    }
}

    


    const login = async (req, res) => {
        try {
            const email = req.body.email
            const password = req.body.password
            console.log(email)
            console.log(password)

            const user = await User.findOne({ email })

            if (!user) {
                res.status(404).json({ msg: "Invalid password or email " })
            }
            else {

                //directly password match krwa liya 
                // const isMatch = await bcrypt.compare(password,user.password )

                //yahan comparePass is in userSchema file 
                const isMatch = await user.comparePass(password)

                if (isMatch) {
                    res.status(200).json({
                        msg: 'login successful',
                        token: await user.generateToken(),
                        userID: user._id.toString()
                    });

                }
                else {
                    res.status(404).json({ msg: "Invalid password or email " })

                }

            }
        } catch (error) {
            // res.status(404).send(error)
            res.status(404).json({ msg: "Server prblm" })

        }
    }


    const signup = async (req, res, next) => {
        try {
            // console.log(req.body);
            const { firstname, lastname, email, phone, password, confirmpassword } = req.body
            console.log(req.body);

            const existingUser = await User.findOne({ email })

            if (existingUser) {
                res.status(404).json({ message: 'email already exist' })
            }
            else {

                //For hashing we could write like this or in userSchema file can set pre method

                // const hashPassword = await bcrypt.hash(password,10)
                // 10=>salt round
                // console.log(hashPassword)
                // const hashCnfrmPassword = await bcrypt.hash(password,10)
                // console.log(hashCnfrmPassword)
                // if (password === confirmpassword) {
                //     const registerUser = new User({
                //         firstname, lastname, email, phone, password:hashPassword, confirmpassword:hashCnfrmPassword
                //     })



                if (password === confirmpassword) {
                    const registerUser = new User({
                        firstname, lastname, email, phone, password, confirmpassword
                    })


                    const register = await registerUser.save()
                    // console.log(register);


                    res.status(200).json({
                        msg: 'user registered successfully',
                        token: await registerUser.generateToken(),
                        userID: registerUser._id.toString()
                    });


                    console.log(registerUser);

                }
                else {
                    res.status(404).json('Password does not match')

                }
            }
        }
        catch (error) {
            // res.status(404).send(error)
            next(error)
            console.log('error');
        }
    }


    module.exports = { contact, login, signup, user, services, changepassword, emailsendforotp }