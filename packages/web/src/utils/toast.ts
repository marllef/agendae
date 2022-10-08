import { toast as RTF, ToastOptions } from 'react-toastify';

export const Toastify = {
  success: (message: string = 'Sucesso!', options?: ToastOptions<{}>) =>
    RTF.success(message, {
      toastId: 'success',
      theme: 'colored',
      ...options,
    }),
  error: (message: string = 'Sucesso!', options?: ToastOptions<{}>) =>
    RTF.error(message, {
      toastId: 'error',
      theme: 'colored',
      ...options,
    }),
};
