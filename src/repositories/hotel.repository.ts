import { Op } from 'sequelize';

import logger from '../configs/logger.config';
import Hotel from '../db/models/hotel.model';
import { CreateHotelDTO } from '../dtos/hotel.dto';
import { NotFoundError } from '../utils/errors/app.error';

export async function createHotel(hotelData: CreateHotelDTO) {
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        ratingCount: hotelData.ratingCount
    });

    logger.info(`Hotel created with id: ${hotel.id}`);
    return hotel;
}

export async function getHotelById(id: number) {
    const hotel = await Hotel.findByPk(id);

    if(!hotel) {
        logger.error(`Hotel not found for id: ${id}`);
        throw new NotFoundError(`Hotel Not Found For id: ${id}`);
    }

    logger.info(`Hotel found with id: ${hotel.id}`);
    return hotel;
}

export async function getAllHotels() {
    const hotels = await Hotel.findAll({
        where: {
            deletedAt: {
                [Op.is]: null
            }
        }
    });

    logger.info('All hotels are found');
    return hotels;
}

export async function softDeleteHotel(id: number) {
    const hotel = await Hotel.findByPk(id);

    if(!hotel) {
        logger.error(`Hotel not found for id: ${id}`);
        throw new NotFoundError(`Hotel Not Found For id: ${id}`);
    }

    hotel.deletedAt = new Date();
    await hotel.save();

    logger.info(`Hotel soft deleted for id: ${id}`);
    return hotel;
}