import {
  IsNumberString,
  IsString,
  MinLength,
  IsAlpha,
  Length,
} from 'class-validator';

export class SearchParams {
  @IsString()
  @IsAlpha()
  @Length(1, 50)
  name: string;
}
