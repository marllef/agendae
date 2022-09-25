import { Service as DbService } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class Service implements DbService {
  id: number;
  name: string;
  description: string;
  value: Decimal;
  typeId: number;
  businessId: number;
}
