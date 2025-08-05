import express from 'express'
import { userLogin, userSignup } from './controller.js'

const router = express.Router();

router.get('/login', userLogin)
router.get('/signup',userSignup)

export default router;



























// const app =  express()
// const PORT = 3000

// //simple.route

// app.get('/', (req, res) => {
//     res.send('hello from express')
// });
 
// app.listen(PORT, () => {
//     console.log(`server running on http://localhost:${PORT}`)
// });


// app.get('/user/username', (req, res) => {
//     const username = req.params.username
//     res.send(`welcome ${username}`)
// });

// //search?keyword=express
// app.get('/search', (req, res) => {
//     const keyword = req.query.keyword
//     res.send(`searching for ${keyword}`)
// });