/* eslint-disable class-methods-use-this */
import api from "../config/api";

class AccountService {
  async createAccount(token) {
    console.log(token);
    try {
      const { data } = await api.post(`account/create`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        console.log(data.response.data, "zapeeeeeeeeeeeeee");
        return data;
      }
      return null;
    } catch (e) {
      console.log(e.response.data);
      return null;
    }
  }

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
    } catch (e) {
      console.log(e.response.data);
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
    } catch (e) {
      console.log(e.response.data);
      return null;
    }
  }
}

export default new AccountService();
