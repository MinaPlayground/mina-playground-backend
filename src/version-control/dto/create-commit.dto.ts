import { IsString } from 'class-validator';

export class CreateCommitDTO {
  @IsString()
  previousCode: string;

  @IsString()
  currentCode: string;

  @IsString()
  project_id: string;
}
