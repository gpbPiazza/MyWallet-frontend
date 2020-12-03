import api from '../config/api';

class SignUpService {
  async signUp(userData) {
    try {
      const { data } = await api.post(`users/sign-up`,userData);
      if (data) {
        return {success: data};
      }
    } catch (error) {
      return error;
    }
  }
}

export default new SignUpService();