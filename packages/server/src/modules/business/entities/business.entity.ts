import { Business as DbBusiness } from '@prisma/client';

export class Business implements DbBusiness {
  id: number;
  name: string;
  description: string;
  locationId: number;
  tags: string[];
  ratings: number[];
}
