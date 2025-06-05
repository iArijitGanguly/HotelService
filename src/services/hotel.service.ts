import { CreateHotelDTO } from '../dtos/hotel.dto';
import { createHotel, getAllHotels, getHotelById, softDeleteHotel } from '../repositories/hotel.repository';

export async function createHotelService(hotelData: CreateHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id: number) {
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService() {
    const hotel = await getAllHotels();
    return hotel;
}

export async function softDeleteHotelService(id: number) {
    const hotel = await softDeleteHotel(id);
    return hotel;
}