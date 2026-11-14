import { Request, Response } from "express";
import { FilmeService } from "../services/filme.service.js";

const filmeService = new FilmeService();

export class FilmeController{

    async create(req: Request,res: Response)
    {
        const dados = req.body;
        await filmeService.create(dados);
        res.status(200).send();//status 200 é o código de sucesso, e send() envia a resposta para o cliente

    }

    async delete(req: Request, res: Response)
    {
        const id = Number(req.params.id);
        await filmeService.delete(id);
        res.status(200).send();

    }

    async update(req:Request, res:Response)
    {
        const dados = req.body;
        const id = Number(req.params.id);
        await filmeService.update(id, dados);
        res.status(200).send();

    }

    async findAll(req:Request, res:Response)
    {
        const resp = await filmeService.findAll();
        res.status(200).json(resp);

    }

    async findById(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const resp = await filmeService.findById(id);
        res.status(200).json(resp);

    }

}