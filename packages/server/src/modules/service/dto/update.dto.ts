import { PartialType } from '@nestjs/swagger';
import { CreateServiceDto } from './create.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {}
