import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateFileTreeDTO {
  @IsString()
  @IsOptional()
  @MaxLength(512)
  location: string;

  @IsString()
  @IsOptional()
  @MaxLength(512)
  rename: string;

  @IsObject()
  @IsOptional()
  locations: object;

  @IsString()
  @IsOptional()
  @MaxLength(10000)
  code = '';
}
