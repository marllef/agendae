import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { User } from '~/modules/user/entities/user.entity';

export class CreateScheduleDto {
  @ApiProperty({
    type: Date,
  })
  date: Date | string;
  @ApiProperty({
    type: Date,
  })
  time: Date | string;
  @ApiProperty({
    type: Number,
  })
  totalValue?: number | string;
  @ApiProperty()
  owner: string;
  @ApiProperty()
  business: number;
  @ApiProperty({
    isArray: true,
    type: Number,
  })
  services: number[];
}
