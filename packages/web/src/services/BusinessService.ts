import { api } from '~/configs';
import { Business } from '~/interfaces/business';

export default {
  getAll: async () => {
    try {
      const response = await api.get<Business[]>('business');

      return response.data;
    } catch (err: any) {
      throw err;
    }
  },
  getOne: async (id: number) => {
    try {
      const response = await api.get<Business>(`business/${id}`);

      return response.data;
    } catch (err: any) {
      throw err;
    }
  },
};
