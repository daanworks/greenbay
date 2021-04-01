const bcrypt = require('bcrypt');

export const passwordEncrypter = {
  async encrypt(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
}
