import { Service } from '@prisma/client';

export class CreateBusinessDto {
  name: string;
  description?: string;
  owner: string;
  tags?: string[];
  services?: Service[];
  location: {
    tag?: string;
    address: string;
    complement?: string;
    city: string;
    state: string;
    country: string;
    zip?: string;
  };
}
