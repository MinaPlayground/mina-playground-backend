import { IsObject, IsString } from 'class-validator';

export class CreateCommitDTO {
  @IsObject()
  files: string;

  @IsString()
  message: string;

  @IsString()
  project_id: string;
}
