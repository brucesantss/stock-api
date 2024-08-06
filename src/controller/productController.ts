import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProduct = async (req: Request, res: Response) => {
    const { name, details, price, stock } = req.body;

    try {

        if(!name || !details || !price || !stock){
            return res.status(400).json({ message: 'todos os campos são obrigatório.' })
        }

        const create = await prisma.product.create({
            data: {
                name,
                details,
                price,
                stock
            },
        });

        if(!create){
            return res.status(500).json({ message: 'não foi possível criar o produto.' })
        }

        return res.status(201).json({ message: 'produto criado.' })

    } catch (error) {
        console.log(error);   
    }
}