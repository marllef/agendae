import { Prisma, Service } from '@prisma/client';

export class Business {
  id: number;
  name: string;
  description: string;
  locationId: number;
  tags: string[];
  ratings: number[];
  services: Service[];
}
