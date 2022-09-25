import { Schedule as DbSchedule, ScheduleStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class Schedule implements DbSchedule {
  businessId: number;
  id: number;
  date: Date;
  time: Date;
  status: ScheduleStatus;
  userId: string;
  ownerId: string;
  totalValue: Decimal;
  createdAt: Date;
  updatedAt: Date;
  canceledAt: Date;
}
