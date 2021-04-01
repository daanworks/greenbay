import { itemsService } from "../services/itemsService";

export const itemsController = {
  async get(req, res) {
    try {
      console.log(req);
      let data = await itemsService.getItems();
      res.status(200).json(data);
    } catch (error) {
      console.log(`EZT KERESD${error}`);
      res.status(error.status).json(error.message);
    }
  },
}
