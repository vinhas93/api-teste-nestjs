import { ApiProperty } from '@nestjs/swagger';
import {
  Contains,
  IsInt,
  IsLowercase,
  IsNotEmpty,
  Length,
  Min,
  ValidateIf,
} from 'class-validator';

export class CreateHeroDto {
  @Length(3, 20)
  @ApiProperty({
    description: 'Nome do Herói.',
    example: 'Santa Claus',
  })
  name: string;

  @IsInt()
  @Min(16)
  @ApiProperty({
    description: 'Idade do Herói. Idade mínima 16.',
    example: 1247,
  })
  age: number;

  @IsLowercase()
  @ValidateIf((o) => o.class !== 'warrior')
  @ValidateIf((o) => o.class !== 'mage')
  @ValidateIf((o) => o.class !== 'ranger')
  @ValidateIf((o) => o.class !== 'rogue')
  @Contains('warrior, mage, ranger or rogue')
  @ApiProperty({
    description: 'Classe do Herói. Pode ser: warrior, mage, ranger ou rogue',
    example: 'mage',
  })
  class: string;

  @Length(3)
  @ApiProperty({
    description: 'Habilidade única do Herói.',
    example: 'Sage Wisdom',
  })
  skill: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'História do Herói.',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis eu sapien et mollis. Nullam dapibus mollis ante a consectetur. Ut et convallis elit. Aliquam rhoncus tellus sapien, at lobortis.',
  })
  story: string;
}
