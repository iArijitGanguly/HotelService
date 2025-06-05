import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateHotelDTO } from '../dtos/hotel.dto';
import { createHotelService, getAllHotelsService, getHotelByIdService, softDeleteHotelService } from '../services/hotel.service';

async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const hotelData: CreateHotelDTO = req.body;
        const response = await createHotelService(hotelData);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Hotel Created Successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);
        const response = await getHotelByIdService(id);
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Fetched Hotel Successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function getAllHotelsHandler(_req: Request, res: Response, next: NextFunction) {
    try {
        const response = await getAllHotelsService();
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Fetched Hotel Successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);
        const response = await softDeleteHotelService(id);
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Fetched Hotel Successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

export default {
    createHotelHandler,
    getHotelByIdHandler,
    getAllHotelsHandler,
    deleteHotelHandler
};