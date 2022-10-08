import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request as Req } from 'express';
import { LocalAuthGuard, JwtAuthGuard } from '~/guards';
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

  @UseGuards(JwtAuthGuard)
  @Get('validate')
  async getCurrentUser(@Request() req: Req) {
    const token = req.headers.authorization?.split(' ')[1];
    return this.auth.getCurrentUser(token);
  }
}
