import { db } from '../data/connection';

export const itemsRepository = {

  async getAllItems() {
    const query = `SELECT * FROM items;`;
    try {
      const data = await db.query(query, []);
      return data.results;
    } catch (error) {
      throw { status: 500, message: `Database error: ${error.toString()}` }
    }
  },

  async getAllItemsByUserId(userid) {
    const query = `SELECT * FROM items WHERE userid=?`;
    const value = [userid];
    try {
      const data = await db.query(query, value);
      return data.results;
    } catch (error) {
      throw { status: 500, message: `Database error: ${error.toString()}` }
    }
  },

}
