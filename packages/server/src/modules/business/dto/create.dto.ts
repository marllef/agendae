import { ApiProperty } from '@nestjs/swagger';
import { Service } from '@prisma/client';

class Location {
  @ApiProperty()
  tag?: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  complement?: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  zip?: string;
}

export class CreateBusinessDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  owner: string;
  @ApiProperty()
  tags?: string[];
  @ApiProperty()
  services?: Service[];
  @ApiProperty()
  location: Location;
}
