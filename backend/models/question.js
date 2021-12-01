const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    test: {
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
    }
})

question.statics.getTests = (author = null) => {
    return author !== null ? question.find({ author: author }) : question.find()
}
question.statics.getTest = (testId) => {
    return question.findOne({ _id: testId })
}

question.statics.update = (data) => {
    return question.findOneAndUpdate({ _id: data._id }, data)
}

question.statics.delete = (testId) => {
    return question.findOneAndDelete({ _id: testId })
}

question.statics.getQuestions = (testId) => {
    return question.find({ _id: testId })
}

question.statics.getQuestion = (testId, questionId) => {
    return question.findOne({ _id: testId, questions: { $elemMatch: { number: questionId } } })
}

const question = mongoose.model('question', questionSchema)
module.exports = question

