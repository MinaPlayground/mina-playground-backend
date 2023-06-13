import { FileSystemTree } from '../../../types';
import { Types } from 'mongoose';

export class CreateFileTreeDTO {
  readonly fileSystemTree: FileSystemTree;
  readonly project_id: Types.ObjectId;
}
