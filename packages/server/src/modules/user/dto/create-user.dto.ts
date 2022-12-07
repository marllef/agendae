import { Prisma, prisma, Roles } from '@prisma/client';
import { User } from '../entities/user.entity';

export class CreateUserDto implements Prisma.UserCreateInput {
  id?: string;
  name: string;
  email: string;
  image?: string;
  password: string;
  roles?: Prisma.UserCreaterolesInput | Prisma.Enumerable<Roles>;
  active?: boolean;
  schedules?: Prisma.ScheduleCreateNestedManyWithoutOwnerInput;
  business?: Prisma.BusinessCreateNestedOneWithoutOwnerInput;
  service?: Prisma.ServiceCreateNestedOneWithoutProvidersInput;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
