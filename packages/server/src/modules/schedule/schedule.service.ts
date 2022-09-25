import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateScheduleDto } from './dto/create.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateScheduleDto) {
    const { date, time, totalValue, owner, services } = data;
    const created = await this.prisma.schedule.create({
      data: {
        date,
        time,
        totalValue,
        owner: {
          connect: {
            id: owner,
          },
        },
        services: {
          connect: services.map((id) => ({ id: id })),
        },
      },
    });

    return created;
  }

  async findAll() {
    const schedules = await this.prisma.schedule.findMany({
      include: {
        services: true,
      },
    });
    return schedules;
  }

  async findOne(id: number) {
    const schedule = await this.prisma.schedule.findFirst({
      where: {
        id,
      },
      include: {
        services: true,
      },
    });
    return schedule;
  }

  async update(id: number, data: UpdateScheduleDto) {
    const { date, time, totalValue, owner, services } = data;

    const schedule = await this.prisma.schedule.update({
      where: {
        id,
      },
      data: {
        date,
        time,
        totalValue,
        owner: {
          connect: {
            id: owner,
          },
        },
        services: {
          connect: services.map((id) => ({ id: id })),
        },
      },
    });
    return schedule;
  }

  async remove(id: number) {
    const schedule = await this.prisma.schedule.delete({
      where: {
        id,
      },
    });
    return {
      data: schedule,
      message: 'Agendamento deletado com sucesso!',
    };
  }
}
