import { Business } from '@prisma/client';
import { api } from '~/configs';
import { InternalError } from '~/utils/helpers';

export default {
  getAll: async () => {
    try {
      const response = await api.get<Business[]>('business');

      return response.data;
    } catch (err: any) {
      throw new InternalError(err);
    }
  },
  
};
