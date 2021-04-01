import { itemsRepository } from "../repositories/items";

export const itemsService = {
  async getItems() {
    try {
      return await itemsRepository.getAllItems();
    } catch (error) {
      throw { status: 400, message: `Unable to list items: ${error.toString()}` }
    }
  },
}
