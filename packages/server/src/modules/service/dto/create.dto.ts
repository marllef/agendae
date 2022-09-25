import { ApiProperty } from '@nestjs/swagger';
import { Image, ServiceType, User } from '@prisma/client';

export class CreateServiceDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  value: number;
  @ApiProperty()
  images: Image[];
  @ApiProperty()
  type: ServiceType;
  @ApiProperty()
  business: number;
  @ApiProperty()
  providers: User[];
}
