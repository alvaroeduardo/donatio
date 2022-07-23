import { v4 as uuidv4 } from 'uuid';
import donationsModel from '../Models/donations.model.js';

async function listAllDonations(req, res){
    await donationsModel.findAll()
        .then( (result) => {
            if(result == []){
                res.status(202).json({Result: "Nenhuma doação foi encontrada."})
            }

            res.status(202).json(result);
        } )
}

async function findDonate(req, res){
    await donationsModel.findByPk( req.query.id )
        .then( (result) => {
            if(result == null){
                res.status(404).json({Result: "Nenhuma doação com esse Id foi encontrada."})
            }

            res.status(202).json(result);
        } )
}

function createNewDonate(req, res){
    donationsModel.create({
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        idGiver: req.body.idGiver,
        picDonate: req.body.picDonate,
        locate: req.body.locate,
        coord: req.body.coord
    })
        .then( 
            (result) => res.json({Results: "Doação criada com sucesso.", result}) 
        )
}

async function updateDonate(req, res){
    const donate = await donationsModel.findByPk(req.query.id);

    donate.title = req.body.title;
    donate.description = req.body.description;
    donate.picDonate = req.body.picDonate;
    donate.locate = req.body.locate;
    donate.coord = req.body.coord;

    await donate.save()
        .then( (result) => res.status(200).json({Results: "Dados atualizados com sucesso.", result}) )
}

async function deleteDonate(req, res){
    const donate = await donationsModel.findByPk(req.query.id);

    donate.destroy()
        .then( (result) => res.status(200).json({Results: "Deletado com sucesso."}) )
} 

export default { listAllDonations, findDonate, createNewDonate, updateDonate, deleteDonate }