import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res)=> {

  const user = await User.create({
    name: 'Luan Patrick',
    email: 'luanpatrickbo@gmail.com',
    password_hash: '123464664566'
  });

  return res.json(user)
});

export default routes;