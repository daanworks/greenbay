import { db } from '../data/connection';

export const userRepository = {

  async insertNewUser(username, password) {
    const query = `INSERT INTO users (username, password) VALUES (?,?)`;
    const value = [username, password];
    try {
      const data = await db.query(query, value);
      return data.results.insertId;
    } catch (error) {
      throw { status: 500, message: `Database error: ${error.toString()}` };
    }
  },

  async findUserByUserName(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const value = [username];
    try {
      const data = await db.query(query, value);
      console.log(data.results[0]);
      return data.results[0];
    } catch (error) {
      throw { status: 500, message: `Database error: ${error.toString()}` }
    }
  },

  async findUserByUserId(userid) {
    const query = `SELECT * FROM users WHERE userid = ?`;
    const value = [userid];
    try {
      const data = await db.query(query, value);
      console.log(data.results[0]);
      return data.results[0];
    } catch (error) {
      throw { status: 500, message: `Database error: ${error.toString()}` }
    }
  },


}
