/* eslint-disable class-methods-use-this */
import api from "../config/api";

class AccountService {
  async getTransactions(token, userId) {
    try {
      const { data } = await api.get(`account/transaction-history/${userId}`, {
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

  async getBalance(token) {
    try {
      const { data } = await api.get(`account`, {
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

export default new AccountService();
