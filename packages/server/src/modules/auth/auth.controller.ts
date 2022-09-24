import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.auth.login(req.user);
  }

  @Post('register')
  async register(@Body() body: User) {
    return this.auth.register(body);
  }
}
