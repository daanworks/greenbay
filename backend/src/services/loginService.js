import { userRepository } from "../repositories/user";
const bcrypt = require('bcrypt');
import { tokenCreator } from "../middlewares/tokenCreator";

export const loginService = {

  async postLogin(username, password) {
    if(!username || !password) {
      throw { status: 400, message: 'All fields are required!' }
    }
    let data = await userRepository.findUserByUserName(username);
    if(!data) {
      throw { status: 400, message: 'Wrong username' }
    }
    let validLogin = bcrypt.compareSync(password, data.password, (error) => {
      if(error) {
        throw { status: 500, message: 'bcrypt is not working, please try again later!' }
      }
    });
    if(!validLogin) {
      throw { status: 400, message: 'Wrong username or password!' }
    }
    try {
      const token = await tokenCreator.tokenCreator(username);
      const userid = data.userid;
      return {
        token: token,
        userid: userid,
        username: username,
      };
    } catch (error) {
      throw { status: 400, message: 'Failed to create user token' }
    }
  },

}
