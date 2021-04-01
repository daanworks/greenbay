import { userRepository } from "../repositories/user";
import { passwordEncrypter } from "../middlewares/password-encrypter";

export const registerService = {

  async postRegister(username, password) {
    if(!username || !password) {
      throw { status: 400, message: 'Missing username or password! * BACKEND' }
    }
    const checkUserNameIsValid = await userRepository.findUserByUserName(username);
    if(checkUserNameIsValid) {
      throw { status: 400, message: 'Username is already taken!' }
    }
    const passwordHash = await passwordEncrypter.encrypt(password);
    const userid = await userRepository.insertNewUser(username, passwordHash);
    const data = {
      username: username,
      userid: userid,
    }
    return data;
  },

}
