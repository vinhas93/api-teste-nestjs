import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroService {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Fulana',
      age: 37,
      class: 'warrior',
      skill: 'Shout',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
    },
    {
      id: 2,
      name: 'Fulano',
      age: 48,
      class: 'warrior',
      skill: 'Stump',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
    },
  ];
  findAll() {
    return this.heroes;
  }

  create(createHeroDto: CreateHeroDto) {
    const hero: Hero = { id: this.heroes.length + 1, ...createHeroDto };

    this.heroes.push(hero);

    return `Um novo herói chega ao mundo: \n${hero.name}, da classe ${hero.class}`;
  }
}
