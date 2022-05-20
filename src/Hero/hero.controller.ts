import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hero')
@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  @Get('list')
  findAll() {
    return this.heroService.findAll();
  }

  @Post('create')
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }
}
