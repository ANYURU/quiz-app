const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    name: String,
    username: {
        type:String,
        required: true,
        trim: true, 
        unique: 1
    },
    password: { 
        type: String,
    }
});

userSchema.statics.getUser = async ( username ) => {
    const USER = await user.findOne({ username: username });
    return {
        id: USER._id,
        createdAt: USer.createdAt,
        username: USER.username,
    }
}

userSchema.statics.getUserById = async (id) => {
    const USER = await user.findById(id);
    return {
        id: USER._id,
        createdAt: USER.createdAt,
        username: USER.username, 
    }
}

userSchema.statics.getUsersByTerm = async (term = null) => {
    let users = await user.find({name: term})
    if (users?.length > 0) {
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt, 
            username: user.username
        }))
        
        return users
    }

    users = await user.find({email: term})
    if(users?.length > 0) {
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt,
            username: user.username,
        }))

        return users;
    }

    users = await user.find({username: term})
    if(users?.length > 0) {
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt,
            username: user.username,
        }))

        return users;
    }

    users = await user.find({phone: term})
    if(users?.length > 0) {
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt,
            username: user.username,
        }))

        return users;
    }

    return null;
}

const user = mongoose.model('User', userSchema);

module.exports = user;