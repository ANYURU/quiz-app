const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
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

test.statics.getTests = (author = null) => {
    return author !== null ? test.find({ author: author }) : test.find()
}
test.statics.getTest = (testId) => {
    return test.findOne({ _id: testId })
}

test.statics.update = (data) => {
    return test.findOneAndUpdate({ _id: data._id }, data)
}

test.statics.delete = (testId) => {
    return test.findOneAndDelete({ _id: testId })
}

test.statics.getQuestions = (testId) => {
    return test.find({ _id: testId })
}

test.statics.getQuestion = (testId, questionId) => {
    return test.findOne({ _id: testId, questions: { $elemMatch: { number: questionId } } })
}

const test = mongoose.model('question', testSchema)
module.exports = test

