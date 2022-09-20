import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (user && isValidPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
