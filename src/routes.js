import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res)=> {
  return res.json({massage: 'Hello cara'})
});

export default routes;