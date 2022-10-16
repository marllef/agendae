import { Business, Image, Prisma, ServiceType, User } from '@prisma/client';

export class Service
  implements
    Prisma.ServiceGetPayload<{
      include: {
        images: true;
        type: true;
        business: true;
        providers: true;
      };
    }>
{
  id: number;
  name: string;
  description: string;
  value: Prisma.Decimal;
  typeId: number;
  businessId: number;
  images: Image[];
  business: Business;
  type: ServiceType;
  providers: User[];
}
