import { User } from '@prisma/client';
import { api } from '~/configs';
import { LoginSuccessResponse } from '~/interfaces';
import { InternalError } from '~/utils/helpers';

export default () => ({
  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post<LoginSuccessResponse>('/auth/login', {
        email,
        password,
      });

      return response.data;
    } catch (err: any) {
      const error = new InternalError(err);
      console.log(error.message);
    }
  },
  signUp: async (data: User) => {},
});
