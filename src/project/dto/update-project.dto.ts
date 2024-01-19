import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateProjectDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  name: string;

  @IsBoolean()
  readonly visibility: boolean;
}
