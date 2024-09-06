const express = require("express")
const router = express.Router()

const jogo_controller = require("../controller/jogo.js")
const upper_case = require("../middlewares/uppercase.js")

router.get("/", (req, res) => {
    res.json(jogo_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(jogo_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = jogo_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", upper_case, (req, res) => {
    const code = jogo_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    jogo_controller.destroy(req.params.id)
    res.json()
})

router.get("/", (req, res) => {
    res.json(jogo_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(jogo_controller.show(req.params.id))
})

// definindo rotas

module.exports = router