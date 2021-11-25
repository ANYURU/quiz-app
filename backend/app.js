const express = require('express');
const app = express();
const port = 3001;

// Middleware
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hello World!')
})


app.get('/login', (req, res) => {
    res.json({
        'result': 'success', 
        'message': 'Login Successful'
    });
});

app.post('/register', (req, res) => {
    // Register logic

    console.log(req.body)

    res.json({
        'result': 'success',
        'message': 'Register Successful'
    })
})

app.delete('/users/:id', (req, res) => {
    // console.log(req.params.id)
    const { id } = req.params
    res.send(`Deleted ${id}`)
})

app.put('/users', (req, res) => {
    console.log(req.body)
    res.send('update user')
})

app.patch('/users/:id', (req, res) => {
    const { id } = req.params
    let user = {
        'id':12,
        'username': 'Anyuru',
        'gender': 'Male',
        'email': 'davidderrickanyuru@gmail.com'
    }

    console.log('Old user', user)

    const { username } = req.body
    if(user.id == id){
        user.username = username
        res.json({
            'result': 'success',
            'Username': `Username updated to ${username}`,
            'updated_user' : user
        })
    } else {
        res.send(`User ${id} not found`)
    }
}) 

app.listen(port, ()=> {
    console.log(`API working on localhost:${port}`);
});






