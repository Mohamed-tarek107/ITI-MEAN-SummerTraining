import express from 'express'

const app = express()
const PORT = 3000;
//set ejs as view engine
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    const userName = 'Tarek'
    res.render('index', {userName})
})

app.get('/', (req,res) => {
    console.log("middle")
    res.send('hello express')
})

app.get('/error', () => {
    throw new Error('this is the test error ')
})

app.use((err,req,res,next) => {
    console.log(err.message)
    res.send('internal error')
})

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
})

    

        //add middleware
// app.post('/users', express.json() , (req,res) => {
//     const {name,email} = req.body
//     res.json({
//         message:`User ${name} with email ${email} created`
//     })
// }) 

// app.put('/users/:id', express.json(), (req,res) => {
//     const userid = req.params.id
//     const {name, email} = req.body
//     res.json({
//         message: `user ${userid} updated to ${name}, ${email}`
//     })
// })





//-------------
//user --> /users/name/id (mulitple params -> according to user )
// app.get('/things/:name/:id', (req,res) => {
//     const {name, id} = req.params;
//     res.json({
//         id,
//         name
//     })
// })

// //catch invalid routes
// app.get('*', (req,res) => {
//     res.send("sorry error/invalid")
// })



//----

// app.use((req,res,next) => {
//     console.log('A new request recived at' +Date.now())
//     next()
// })




// app.use((req,res,next) => {
//     console.log("start")
//     res.on('finish', () => {
//         console.log("end")
//     })
//     next()
// })
