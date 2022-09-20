import { Roles, User as DbUser } from '@prisma/client';

export class User implements DbUser {
  id: string;
  name: string;
  email: string;
  image: string;
  password: string;
  roles: Roles[];
  createdAt: Date;
  updatedAt: Date;
}
