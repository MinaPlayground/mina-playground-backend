import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class DeleteFileTreeItemDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  location: string;
}
