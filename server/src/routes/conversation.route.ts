import express from 'express';
// import auth from '../middleware/auth';
// const authValidation = require('../middleware/validation/user.validation')
const router = express.Router()

router.post('/healthCheck', (req: any, res: any) => {
    res.status(200, "Health check ok")
})
// router.post('/login',authValidation.login,authController.login)
export default router