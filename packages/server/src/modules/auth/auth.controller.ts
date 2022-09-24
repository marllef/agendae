import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @ApiOperation({})
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any, @Body() body: LoginDto) {
    return this.auth.login(req.user);
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.auth.register(body);
  }
}
