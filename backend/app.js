const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/db')
const routerUser = require('./routes/user')
const routerExam = require('./routes/exam')

try {
    dbConnect
} catch (error) {
    // Log to a file
    console.log(error)
}

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API is alive!')
})

app.use('/users', routerUser)
app.use('/exams', routerExam)
app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});






