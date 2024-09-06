const express = require("express")
const router = express.Router()
const upper_case = require("../middlewares/uppercase.js")


const estudio_controller = require("../controller/estudio.js")

router.get("/", (req, res) => {
    res.json(estudio_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(estudio_controller.show(req.params.id))
})

router.post("/", upper_case, (req, res) => {
    const code = estudio_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = estudio_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    estudio_controller.destroy(req.params.id)
    res.json()
})

router.get("/", (req, res) => {
    res.json(estudio_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(estudio_controller.show(req.params.id))
})

// definindo rotas

module.exports = router