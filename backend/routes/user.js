const express = require('express')
const modelUser = require('../models/user')
const routerUser = Router()

routerUser.get('/', (req, res) => {
    res.send('All users will be returned')
})

routerUser.get('/users/username/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const user = await modelUser.getUser(username)

        if (user !== null) res.json({
            'result': 'success',
            'user': user
        });

        return res.json({
            'result': 'failure',
            'message': `${username} not found`
        })

    } catch(error) {
        // console.log(error)
        return res.json({
            'result': 'failure',
            'message': `user: ${username} not found`
        })

    }
})

routerUser.post('/login', async (req, res) => {
    res.json({'message': 'underdevelopment'})
})

router.post('/resgister', async (req, res) => {
    const { username, password } = req.body

    try {
        const user = new modelUser({ username, password })
        await user.save()

        if(user !== null) return res.json({
            'result': 'success',
            'message': 'Register Successful',
            'user': user
        })
    
        return res.json({
            'result': 'failure',
            'message': 'Register Failed'
        })

    } catch (error) {
        return res.json({
            'result': 'failure',
            'message': 'Register Failed',
            'description': 'Maybe username is already taken'
        })
    }
}) 

routerUser.put('/', (req, res) => {
    console.log(req.body)
    res.send('Update User')
})

routerUser.patch('/:id', (req, res) => {
    const { id } = req.params;
    let user = {
        'id': 12,
        'username': 'David',
        'gender': 'Male',
        'email': 'davidderrickanyuru@gmail.com'
    }

    console.log('Old user', user)

    const { username } = req.body
    
    if ( user.id === id ) {
        user.username = username
        res.json({
            'result': 'success',
            'Username': `Username updated to ${user.username}`,
            'updated_user': user
        })
    } else {
        res.send(`User ${id} not found`)
    }
})

routerUser.delete('/:id', (req, res) => {
    const { id } = req.params
    let ids = id.split(',');
    // console.log(typeof ids)
    let str = ''
    let deletedCount = 0
    ids.forEach(id => {
        deletedCount++
        str += `${id},`
    })

    res.json({
        'result': 'success',
        'total_items_deleted': deletedCount,
        'deleted_items': str
    })
})


module.exports = routerUser