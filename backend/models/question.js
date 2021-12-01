const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    test: {
        testTitle: {
            type: String,
            required: true,
        },
        testTitle: {
            type: String,
            required: true,
        },
        AllowedStudents: [String]
    },
    question: {
        unique: 1,
        createdAt: {
            type: Date, 
            default: Date.now()
        },
        question: {
            type: String,
            required: 1
        },
        choice: {
            type: Array,
            required: 1,
        },
        answer: [],
        typeOfAnswer: { type: String },
        author: String,
        timeLimit: {type: Number, required: 1},
        category: {type: String, required=1},
        isRequired: Boolean,
        platform: String,
        score: Number,
        expiry: {
            type: Date,
            required: 1,
        },
        answers : {
            potentialAnswers: []
        }
    }, 
    responses : {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        student_id: {
            type: String,
            required: 1
        },
        status: {
            type: Boolean
        },
        duration: {
            type: Number,
            required: 1,
        },
        score:  Number,
        reviewer: String,
        remarks: String,
        Rating: Number
    }
})

const question = mongoose.model('question', questionSchema)
module.exports = question