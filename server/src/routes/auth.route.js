import express from 'express'
import auth from '../middleware/auth'
import authController from '../controller/auth.controller'
import authValidation from '../middleware/validation/user.validation'
const router = express.Router()

router.post('/register',authValidation.register,authController.register)
router.post('/login',authValidation.login,authController.login)

module.exports = router