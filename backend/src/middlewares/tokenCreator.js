import { userRepository } from "../repositories/user";

const jwt = require('jsonwebtoken');

const privateKey = process.env.PRIVATEKEY;

export const tokenCreator = {

  async tokenCreator(username) {
    let data = await userRepository.findUserByUserName(username);
    let token = jwt.sign({
      userid: data.userid,
    }, privateKey);
    return {
      status: 200,
      data: { status: 200, token: token },
    }
  },

}
