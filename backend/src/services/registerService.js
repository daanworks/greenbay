import { userRepository } from "../repositories/user";

export const registerService = {

  async postRegister(username, password) {
    if(!username || !password) {
      throw { status: 400, message: 'Missing username or password! * BACKEND' }
    }
    const userid = await userRepository.insertNewUser(username, password);
    const data = {
      username: username,
      userid: userid,
    }
    return data;
  },

}
