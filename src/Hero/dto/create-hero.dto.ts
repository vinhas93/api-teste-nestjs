import { IsEmpty, IsNumber } from 'class-validator';

export class CreateHeroDto {
  @IsEmpty()
  name: string;
  @IsNumber()
  age: number;
  @IsEmpty()
  class: string;
  @IsEmpty()
  skill: string;
  @IsEmpty()
  story: string;
}
