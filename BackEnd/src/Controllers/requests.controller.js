import requestsModel from "../Models/requests.model.js";
import { v4 as uuidv4 } from 'uuid';

async function listAllRequests(req, res){
    await requestsModel.findAll()
        .then( (result) => {
            if(result == []){
                res.status(202).json({Result: "Nenhum pedido foi realizado."})
            }

            res.status(202).json(result);
        } )
}

async function specificDonations(req, res){
    await requestsModel.findAll( {where: {idDonate: req.body.idDonate}} )
        .then( (result) => {
            if(result == null){
                res.status(404).json({Result: "Nenhuma requisição foi feita nessa doação."})
            }

            res.status(202).json(result);
        } )
}

async function findRequest(req, res){
    await requestsModel.findOne( {where: {id: req.query.id}} )
        .then( (result) => {
            if(result == null){
                res.status(404).json({Result: "Nenhuma requisição encontrada."})
            }

            res.status(202).json(result);
        } )
}

function createNewRequest(req, res){
    requestsModel.create({
        id: uuidv4(),
        idApplicant: req.body.idApplicant,
        idGiver: req.body.idGiver,
        idDonate: req.body.idDonate,
        status: "available"
    })
        .then( 
            (result) => res.json({Results: "Requisição criada com sucesso.", result}) 
        )
}

async function updateRequest(req, res){
    const request = await requestsModel.findByPk(req.query.id);

    request.status = req.body.status

    await request.save()
        .then( (result) => res.status(200).json({Results: "Dados atualizados com sucesso.", result}) )
}

async function deleteRequest(req, res){
    const request = await requestsModel.findByPk( req.query.id );

    request.destroy()
        .then( (result) => res.status(200).json({Results: "Deletado com sucesso."}) )
}

export default { listAllRequests, specificDonations, findRequest, createNewRequest, updateRequest, deleteRequest };