import { Controller, Get } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  @Get()
  findAll() {
    return 'Buscar todos os Heróis';
  }
}
