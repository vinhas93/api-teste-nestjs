import { Controller, Get, Post } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  @Get()
  findAll() {
    return this.heroService.findAll();
  }

  @Post()
  create() {
    return this.heroService.create();
  }
}
