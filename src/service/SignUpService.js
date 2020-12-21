/* eslint-disable class-methods-use-this */
import api from "../config/api";

class SignUpService {
  async signUp(userData) {
    try {
      const { data } = await api.post(`users/sign-up`, userData);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new SignUpService();
