/* eslint-disable class-methods-use-this */
import api from "../config/api";

class LogOutService {
  async logOut(token) {
    try {
      const { data } = await api.delete(`users/log-out`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        return data;
      }
      return null;
    } catch {
      return null;
    }
  }
}

export default new LogOutService();
