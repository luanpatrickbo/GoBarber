import User from '../models/User';


class UserController {
  async store(req, res){
      
    /* User exist */
    
    const userExist = await User.findOne({ where: {email: req.body.email} });

    if(userExist){
        return res.status(400).json({ error: 'User already exist' });
    }
    
    const { id, name, email, provider } = await User.create(req.body);
    
    return res.json({
        id,
        name,
        email,
        provider
    });
  }

  async update(req, res){
    console.log(req.userId);
    
    res.json({ message: true });
  }
}

export default new UserController();