import express from 'express';

import hotelController from '../../controllers/hotel.controller';
import { validateRequestBody, validateRequestParams } from '../../validators';
import { createHotelSchema, hotelIdSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(createHotelSchema), hotelController.createHotelHandler);

hotelRouter.get('/:id', validateRequestParams(hotelIdSchema), hotelController.getHotelByIdHandler);

hotelRouter.get('/', hotelController.getAllHotelsHandler);

hotelRouter.delete('/:id', validateRequestParams(hotelIdSchema), hotelController.deleteHotelHandler);

export default hotelRouter;