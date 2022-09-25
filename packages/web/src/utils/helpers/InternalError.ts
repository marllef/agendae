import { AxiosError } from 'axios';

export class InternalError extends Error {
  constructor(error: any) {
    if (error instanceof AxiosError) {
      super(error.response?.data?.message);
    } else if (typeof error === 'string') {
      super(error);
    } else {
      super(error.message);
    }
  }
}
