import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProjectDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  name: string;

  @IsInt()
  @Min(0)
  @Max(1)
  readonly type: number;

  @IsBoolean()
  readonly visibility: boolean;

  @IsInt()
  readonly files_id: number;
}
