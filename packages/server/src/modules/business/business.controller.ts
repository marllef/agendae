import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create.dto';
import { UpdateBusinessDto } from './dto/update.dto';

@ApiTags('Estabelecimento')
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  create(@Body() data: CreateBusinessDto) {
    return this.businessService.create(data);
  }

  @Get()
  findAll() {
    return this.businessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateBusinessDto) {
    return this.businessService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessService.remove(+id);
  }
}
