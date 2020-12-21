/* eslint-disable class-methods-use-this */
import api from "../config/api";

class SignInService {
  async signIn(userData) {
    try {
      const { data } = await api.post(`users/sign-in`, userData);
      if (data) {
        return { success: data };
      }
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default new SignInService();
