const { Router } = require('express')
const routerExam = Router()
const { getExams, getExam } = require('../controllers/exam')

routerExam.get('/', (req, res) => {
    try {
        const allExams = getExams()
        if (allExams?.length > 0) return res.json({
            'result': 'success',
            'exams': allExams
        })
        
        return res.json({
            'result': 'success',
            'exams': []
        })

    } catch (error) {
        console.log(error)
        return res.json({
            'result': 'error',
            'message': 'Error while getting Exams'
        })
    }
})

routerExam.get('/:author', (req, res) => {
    const { author } = req.params
    try {
        const allExams = getExams(author)
        if (allExams?.length > 0) return res.json({
            'result': 'success',
            'exams': allExams
        })

        return res.json({
            'result': 'success',
            'exams': []
        }) 
    } catch (error) {
        console.log(error)
        return res.json({
            'result': 'error',
            'message': 'Error while getting Exams'
        })
    }

})

routerExam.get('/exam/:id', (req, res) => {
    const { id } = req.params
    try {
        const exam = getExam()
        if ( exam ) return res.json({
            'result': 'success',
            'exam': exam
        })

        return res.json({
            'result': 'success',
            'exam': []
        })
    } catch (error) {
        console.log(error)
        return res.json({
            'result': 'error',
            'message': 'Error while getting Exam'
        })
    }
})

module.exports = routerExam;