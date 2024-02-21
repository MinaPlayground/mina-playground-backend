import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSnippetDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
