const express = require("express");
const app = express();
const port = 5000;

const estudio_router = require("./src/routes/estudio.js");
const genero_router = require("./src/routes/genero.js");
const jogo_router = require("./src/routes/jogo.js");
const publicadora_router = require("./src/routes/publicadora.js");

app.use(express.json());

//estudio
app.use("/estudio", estudio_router)
//genero
app.use("/genero", genero_router)
//jogo
app.use("/jogo", jogo_router)
//publicadora
app.use("/publicadora", publicadora_router)








app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
})