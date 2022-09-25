import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBusinessDto } from './dto/create.dto';
import { UpdateBusinessDto } from './dto/update.dto';

@Injectable()
export class BusinessService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBusinessDto) {
    const { name, description, owner, location, tags } = data;

    const business = await this.prisma.business.create({
      data: {
        name,
        description,
        tags,
        owner: {
          connect: {
            id: owner,
          },
        },
        location: {
          create: {
            tag: location.tag,
            address: location.address,
            complement: location.complement,
            city: location.city,
            state: location.state,
            country: location.country,
            zip: location.zip,
          },
        },
      },
    });

    return business;
  }

  async findAll() {
    const allBusiness = await this.prisma.business.findMany({
      include: {
        services: {
          select: {
            id: true,
            name: true,
            type: true,
            value: true,
          },
        },
        location: true,
        owner: {
          select: {
            id: true,
            name: true,
            active: true,
            email: true,
            image: true,
          },
        },
      },
    });
    return allBusiness;
  }

  async findOne(id: number) {
    const business = await this.prisma.business.findFirst({
      where: {
        id,
      },
      include: {
        location: true,
        services: true,
        owner: {
          select: {
            id: true,
            name: true,
            active: true,
            email: true,
            image: true,
            roles: true,
          },
        },
      },
    });

    if (!business)
      throw new NotFoundException('Estabelecimento não encontrado!');

    return business;
  }

  async update(id: number, data: UpdateBusinessDto) {
    const { name, description, location, tags, services } = data;
    const updated = await this.prisma.business.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        tags,
        location: {
          delete: true,
          create: {
            tag: location.tag,
            address: location.address,
            city: location.city,
            country: location.country,
            state: location.state,
            complement: location.complement,
            zip: location.zip,
          },
        },
      },
    });

    return updated;
  }

  async remove(id: number) {
    const business = await this.findOne(id);

    await this.prisma.business.delete({
      where: {
        id,
      },
    });

    return {
      data: business,
      message: 'Estabelecimento deletado com sucesso!',
    };
  }
}
