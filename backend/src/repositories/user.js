import { db } from '../data/connection';

export const userRepository = {

  async insertNewUser(username, password) {
    const query = `INSERT INTO USERS (username, password) VALUES (?,?)`;
    const value = [username, password];
    try {
      const data = db.query(query, value);
      return data.results.insertId;
    } catch (error) {
      throw { status: 500, message: `Database error: ${error.toString()}` };
    }
  },


}
