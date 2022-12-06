import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create.dto';
import { UpdateServiceDto } from './dto/update.dto';

@Injectable()
export class ServiceService {
  private readonly userWithOutPassword = {};

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateServiceDto) {
    const { name, description, value, images, type, business, providers } =
      data;
    const created = await this.prisma.service.create({
      data: {
        name,
        description,
        value,
        images: {
          createMany: {
            data: images,
            skipDuplicates: true,
          },
        },

        type: {
          connectOrCreate: {
            where: {
              id: type.id || -1,
            },
            create: {
              name: type.name,
            },
          },
        },

        providers: {
          connect: providers.map((provider) => ({ id: provider.id })),
        },

        business: {
          connect: {
            id: business,
          },
        },
      },
    });

    return created;
  }

  async findAll() {
    const services = await this.prisma.service.findMany({
      include: {
        type: true,
        images: true,
        business: true,
        schedules: true,
        providers: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            active: true,
            roles: true,
            updatedAt: true,
            createdAt: true,
          },
        },
      },
    });

    return services;
  }

  async findOne(id: number) {
    const service = await this.prisma.service.findFirst({
      where: {
        id,
      },
      include: {
        type: true,
        images: true,
        business: true,
        schedules: true,
        providers: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            active: true,
            roles: true,
            updatedAt: true,
            createdAt: true,
          },
        },
      },
    });

    if (!service) throw new NotFoundException('Serviço não encontrado');

    return service;
  }

  async update(id: number, data: UpdateServiceDto) {
    const { name, description, value, images, type, business } = data;

    const updated = await this.prisma.service.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        value,
        images: {
          createMany: {
            data: images,
            skipDuplicates: true,
          },
        },

        type: {
          connectOrCreate: {
            where: {
              id: type.id,
            },
            create: {
              name: type.name,
            },
          },
        },

        business: {
          connect: {
            id: business,
          },
        },
      },
    });
    return updated;
  }

  async remove(id: number) {
    const deleted = await this.prisma.service.delete({
      where: {
        id,
      },
    });

    return {
      data: deleted,
      message: 'Serviço deletado com sucesso!',
    };
  }
}
