const User = require('../models/user');
const Tech = require('../models/Tech');

module.exports = {
  async store (request, response) {
    const {user_id} = request.params;
    const {name} = request.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return response.status(400).json({error: 'User not found'});
    }

    const [tech] = await Tech.findOrCreate({
      where: {name}
    });

    await user.addTech(tech);
    
    return response.json(tech);
  },

  async index (request, response) {
    const {user_id} = request.params;

    const user = await User.findByPk(user_id, {
      include: {association: 'techs'},
      attributes: ['name', 'email'],
      through: {
        attributes: ['id', 'name']
      }
    });

    return response.json(user);
  },

  async delete (request, response) {
    const {user_id} = request.params;
    const {name} = request.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return response.status(400).json({error: 'User not found'});
    }

    const tech = await Tech.findOne({
      where: {name}
    });

    await user.removeTech(tech);
    
    return response.json();
  },
}