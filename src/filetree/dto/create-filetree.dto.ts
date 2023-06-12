import { DirectoryNode, FileNode } from '../../../types';

export class CreateFileTreeDTO {
  [name: string]: DirectoryNode | FileNode;
}
