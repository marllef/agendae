import { ApiProperty } from '@nestjs/swagger';
import { Roles, User as DbUser } from '@prisma/client';

export class User implements DbUser {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  roles: Roles[];
  @ApiProperty()
  active: boolean;
  @ApiProperty()
  businessId: number;
  @ApiProperty()
  serviceId: number;

  createdAt: Date;
  updatedAt: Date;
}
