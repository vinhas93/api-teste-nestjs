import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
  findAll() {
    return 'Buscar todos os Heróis.';
  }

  create() {
    return 'Criar um Herói.';
  }
}
