import api from '../config/api';

class SignInService {
  async signIn(userData) {
    try {
      const { data } = await api.post(`users/sign-in`,userData);
      if (data) {
        return {success: data};
      }
    } catch (error) {
      return error;
    }
  }

}

export default new SignInService();