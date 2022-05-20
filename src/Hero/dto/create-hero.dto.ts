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
  name: string;

  @IsInt()
  @Min(16)
  age: number;

  @IsLowercase()
  @ValidateIf((o) => o.class !== 'warrior')
  @ValidateIf((o) => o.class !== 'mage')
  @ValidateIf((o) => o.class !== 'ranger')
  @ValidateIf((o) => o.class !== 'rogue')
  @Contains('warrior, mage, ranger or rogue')
  class: string;

  @Length(3)
  skill: string;

  @IsNotEmpty()
  story: string;
}
