import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateFileTreeDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  location: string;

  @IsString()
  @IsOptional()
  @MaxLength(512)
  rename: string;

  @IsString()
  @IsOptional()
  @MaxLength(10000)
  code = '';
}
