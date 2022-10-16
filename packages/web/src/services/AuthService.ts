import { User } from '@prisma/client';
import { api } from '~/configs';
import { LoginSuccessResponse, RegisterSuccessResponse } from '~/interfaces';
import { RegisterFormSchema } from '~/pages/register/FormValidation';
import { InternalError } from '~/utils/helpers';

export default {
  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post<LoginSuccessResponse>('/auth/login', {
        email,
        password,
      });

      return response.data;
    } catch (err: any) {
      throw new InternalError(err);
    }
  },
  signUp: async (data: RegisterFormSchema) => {
    try {
      const response = await api.post<RegisterSuccessResponse>(
        '/auth/register',
        data,
      );

      return response.data;
    } catch (err: any) {
      throw new InternalError(err);
    }
  },
};
