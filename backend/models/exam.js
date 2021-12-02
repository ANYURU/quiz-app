const mongoose = require('mongoose')

const examSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    allowedStudents: [],
    questions: {
        type: Array,
        number: {
            type: Number,
            required: true,
            unique: true
        },
        elementType: { type: String },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        label: {
            type: String,
            required: 1
        },
        choices: [],
        answerForChoices: [],
        potentialAnswersForTextAreaInput: [],
        radioQuestionAnswer: {
            type: String
        },
        author: String,
        timeLimit: {
            type: Number,
        },
        category: {
            type: String,
            required: 1
        },
        isRequired: Boolean,
        platform: String,
        score: Number,
        expireAt: {
            type: Date,
        },
        responses: {
            type: Array,
            createdAt: {
                type: Date,
                default: Date.now,
                required: 1
            },
            studentId: {
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
            score: Number,
            reviewer: String,
            remarks: String,
            rating: Number
        }
    }
    
})

exam.statics.getExams = (author = null) => {
    return author !== null ? exam.find({ author: author }) : exam.find()
}
exam.statics.getExam = (examId) => {
    return exam.findOne({ _id: examId })
}

exam.statics.update = (data) => {
    return exam.findOneAndUpdate({ _id: data._id }, data)
}

exam.statics.delete = (testId) => {
    return exam.findOneAndDelete({ _id: testId })
}

const exam = mongoose.model('Exam', testSchema)
module.exports = exam

