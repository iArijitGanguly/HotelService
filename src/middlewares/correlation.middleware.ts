import { NextFunction, Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { asyncLocalStorage } from '../utils/helpers/request.helper';

export const attachCorrelationIdMiddleware = (req: Request, _res: Response, next: NextFunction) => {
    const correlationId = uuidV4();

    req.headers['x-correlation-id'] = correlationId;

    asyncLocalStorage.run({ correlationId }, () => next());
};