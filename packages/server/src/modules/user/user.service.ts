import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ email, name, image, password, roles }: CreateUserDto) {
    const alreadExists = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (alreadExists) throw new ConflictException('Email não disponível.');

    const SALTS = 10;
    const hashedPassword = await bcrypt.hash(password, SALTS);

    const created = await this.prisma.user.create({
      data: {
        email,
        name,
        image,
        password: hashedPassword,
        roles,
      },
    });

    return created;
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        roles: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return users;
  }

  async findOne(key: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: key }, { id: key }],
      },
    });

    if (!user) throw new NotFoundException('Usuário não encontrado.');

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const updated = await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return updated;
  }

  async remove(id: string) {
    const deleted = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return {
      message: `Usuário ${deleted.name} deletado com sucesso!`,
    };
  }
}
