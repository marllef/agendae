import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (user && isValidPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      roles: user.roles,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async register(data: User) {
    const registered = await this.userService.create(data);

    registered.password = undefined;

    return registered;
  }

  async getCurrentUser(token?: string) {
    const payload: any = this.jwtService.decode(token ?? '');

    if (!payload) throw new UnauthorizedException('Sessão inválida.');
    console.log(payload.sub);

    const user = await this.userService.findOne(payload.sub);

    user.password = undefined;

    return user;
  }
}
