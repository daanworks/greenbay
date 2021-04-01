import { loginService } from "../services/loginService";

export const loginController = {
  async post(req, res) {
    const { username, password } = req.body;
    try {
      let data = await loginService.postLogin(username, password);
      res.status(200).json(data);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
}
