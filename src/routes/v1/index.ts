import express from 'express';

import hotelRouter from './hotel.route';
import pingRouter from './ping.route';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);

v1Router.use('/hotels', hotelRouter);

export default v1Router;