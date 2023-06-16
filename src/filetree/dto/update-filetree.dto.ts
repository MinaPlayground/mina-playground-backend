import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateFileTreeDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  fileLocation: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10000)
  readonly code: string;
}
