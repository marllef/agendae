import { Roles } from '@prisma/client';

export type LoginSuccessResponse = {
  token: string;
};

export type ErrorResponse = {
  message: string;
};

export type RegisterSuccessResponse = {
  id: string;
  name: string;
  email: string;
  image: null;
  roles: Roles[];
  active: true;
  businessId: null;
  serviceId: null;
  createdAt: Date | string;
  updatedAt: Date | string;
};
