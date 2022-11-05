const Syllabus = require('../models/syllabusModel')

const createSyllabus = async (req, res) => {
    try {
        const { sub, std, chapNo, chapName, chapStatus } = req.body

        const syllabus = await Syllabus.create({ sub, std, chapNo, chapName, chapStatus })
        res.status(201).json({ syllabus: syllabus, msg: "Success" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }


}

const getChapter = async (req, res) => {
    try {
        // const chapter = await Syllabus.findById(req.param.id)
        const det = req.params
        const chap = await Syllabus.find({ sub: det.sub, std: det.std })
        res.status(200).json(chap)
    } catch (error) {
        res.status(500).json({ msg: err.message })
    }
}

const deleteSyllabus = async (req, res) => {
    try {
        // const syllabus = await Syllabus.findById(req.params.id)

        await Syllabus.findByIdAndDelete(req.params.id)

        res.status(201).json({ msg: "Deleted successfully." })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}

const editSyllabus = async (req, res) => {
    try {
        const { sub, std, chapNo, chapName, chapStatus } = req.body
        await Syllabus.findOneAndUpdate({ _id: req.params.id }, { sub, std, chapNo, chapName, chapStatus })
        res.status(201).json({ msg: 'Success.' })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = { createSyllabus, deleteSyllabus, getChapter, editSyllabus }