import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  @Get()
  findAll() {
    return this.heroService.findAll();
  }

  @Post()
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }
}
