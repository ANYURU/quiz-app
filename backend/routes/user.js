const express = require('express')
const modelUser = require('../models/user')
const routerUser = expressRouter()

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

module.exports = routerUser