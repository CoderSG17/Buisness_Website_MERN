const express = require('express')
const router = new express.Router()
const {contact,services,login,signup,user,emailsendforotp ,changepassword} = require('../controllers/controller')
const validate = require('../middleware/validate') 
const signupSchema = require('../validators/signupSchema')
const loginSchema = require('../validators/loginSchema')
const contactSchema = require('../validators/contactSchema')
const forgotPassSchema = require('../validators/forgotPassSchema')
const changePassSchema = require('../validators/changePassSchema')
const auth = require('../middleware/auth')


// router.get('/',home)
// router.get('/about',about)
// router.get('/contact',contact)
// router.get('/services',services)
router.get('/login',login)
router.get('/signup',signup)
router.get('/user',auth,user)
router.get('/service',services)
// router.get('/emailsendforotp',emailsendforotp)

router.post('/signup',validate(signupSchema),signup)
router.post('/login',validate(loginSchema),login)
router.post('/contact',validate(contactSchema),contact)
router.post('/emailsendforotp',validate(forgotPassSchema),emailsendforotp)
router.post('/changepassword',validate(changePassSchema),changepassword)
// router.post('/changepassword',changepassword)



module.exports = router