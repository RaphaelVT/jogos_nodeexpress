const express = require("express")
const router = express.Router()

const publicadora_controller = require("../controller/publicadora.js")
const upper_case = require("../middlewares/uppercase.js")

router.get("/", (req, res) => {
    res.json(publicadora_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(publicadora_controller.show(req.params.id))
})

router.post("/", upper_case, (req, res) => {
    const code = publicadora_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = publicadora_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    publicadora_controller.destroy(req.params.id)
    res.json()
})

router.get("/", (req, res) => {
    res.json(publicadora_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(publicadora_controller.show(req.params.id))
})

// definindo rotas

module.exports = router