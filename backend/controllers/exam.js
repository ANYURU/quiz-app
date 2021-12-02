const examModel = require('../models/exam')
const getExams = async (author = null) => author ? await examModel.getExams() : await examModel.getExams()
const getExam = async (id) => await examModel.getExam(id)

module.exports = {
    getExams,
    getExam
}