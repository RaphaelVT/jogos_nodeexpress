const express = require("express")
const router = express.Router()

const genero_controller = require("../controller/genero.js")
const upper_case = require("../middlewares/uppercase.js")

router.get("/", (req, res) => {
    res.json(genero_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(genero_controller.show(req.params.id))
})

router.post("/", upper_case, (req, res) => {
    const code = genero_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = genero_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    genero_controller.destroy(req.params.id)
    res.json()
})

router.get("/", (req, res) => {
    res.json(genero_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(genero_controller.show(req.params.id))
})

// definindo rotas

module.exports = router