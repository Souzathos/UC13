import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export async function errorHandler(error:Error | AppError, req:Request, res:Response, next: NextFunction) {
    console.error(error.message)

    if(error instanceof AppError) {
        return res.status(error.statusCode).json({message: error.message})
    }

    return res.status(500).json({message: 'Erro interno do servidor'})
}