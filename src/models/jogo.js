const estudio_controller = require("../controller/estudio.js")
const genero_controller = require("../controller/genero.js")
const publicadora_controller = require("../controller/publicadora.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != "" &&
        body.lancado_em != undefined &&
        !isNaN(new Date(body.lancado_em).valueOf()) &&
        genero_controller.show(body.genero_id) &&
        publicadora_controller.show(body.publicadora_id) &&
        estudio_controller.show(body.estudio_id)
    ) {
        return {
            id,
            nome: body.nome,
            genero_id: body.genero_id,
            estudio_id: body.estudio_id,
            publicadora_id: body.publicadora_id,
            lancado_em: new Date(body.lancado_em),
            criado_em: body.criado_em || new Date(),
            atualizado_em: new Date()
            
        }
    }
}

module.exports = model