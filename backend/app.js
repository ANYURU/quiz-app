const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/db')
const routerUser = require('./routes/user')
try {
    dbConnect
} catch (error) {
    console.error(error)
}

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hello World!')
})

app.use('/users', routerUser)

app.post('/login', async (req, res) => {
    res.json({'message': 'under development'})
})

// app.post('/login', async (req, res) => {

//     const User = await user.getUser('anyuru');
//     if(User !== null) return res.json({
//         'result': 'success', 
//         'message': 'Login Successful'
//     });

//     return res.json({
//         'result':'failure',
//         'message': 'Login Failed'
//     })
// });

app.post('/register',async (req, res) => {
    // Register logic
    // console.log(req.body)
    const { username, password } = req.body;

    try {
        const user = new User({username, password});
        await user.save()

        if(user !== null) return res.json({
            'result': 'success',
            'message': 'Register Successful',
            'user': user
        })
        
        return res.json({
                'result':'Failure',
                'message': 'Register Failed'
        })

    } catch (error) { 
        // console.error(error)
        res.json({
            'result': 'failure',
            'message': 'Register Failed',
            'description': 'Maybe the user is already taken.'
        })
    }

    // if(User !== null) return res.json({
    //     'result': 'success',
    //     'message': 'Register Successful'
    // })
    
    // return res.json({
    //         'result':'Failure',
    //         'message': 'Register Failed'
    //     })
})

app.delete('/users/:id', (req, res) => {
    // console.log(req.params.id)
    const { id } = req.params
    let ids = id.split(',');
    console.log(typeof ids);
    let str = ''
    let deletedCount = 0
    ids.forEach(id => {
        deletedCount++;
        str += `${id},`
    })

    res.json({
        'result': 'success', 
        'total_items_deleted': deletedCount,
        'deleted_items': str
    })

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






