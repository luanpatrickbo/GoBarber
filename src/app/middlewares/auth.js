import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json('Token not provider');
  }

  const [, token] = authHeader.split(' ');

  try {
    
    /** Transforme function callback in asyn await */

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next(); 
  } catch (error) {
    return res.status(401).json('Token not available');
  }

}