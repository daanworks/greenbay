import { registerService } from "../services/registerService";

export const registerController = {
  async post(req, res) {
    const { username, password } = req.body;
    try {
      let data = await registerService.postRegister(username, password);
      res.status(200).json(data);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
}
