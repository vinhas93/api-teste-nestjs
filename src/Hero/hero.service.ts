import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroService {
  heroes: Hero[] = [];
  findAll() {
    return 'Buscar todos os Heróis.';
  }

  create(createHeroDto: CreateHeroDto) {
    const hero: Hero = { id: this.heroes.length + 1, ...createHeroDto };

    this.heroes.push(hero);

    return 'Um novo herói chega ao mundo: /n' + JSON.stringify(hero);
  }
}
