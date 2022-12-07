import { ApiProperty } from '@nestjs/swagger';


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
