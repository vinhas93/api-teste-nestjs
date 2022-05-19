import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HeroService {
  findAll() {
    return 'Buscar todos os Heróis.';
  }

  create(createHeroDto: CreateHeroDto) {
    return 'Herói criado: ' + JSON.stringify(createHeroDto);
  }
}
