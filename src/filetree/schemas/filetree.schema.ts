import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FileSystemTree } from '../../../types';

export type FileTreeDocument = HydratedDocument<FileTree>;

@Schema()
export class FileTree {
  @Prop({ type: Map })
  fileSystemTree: FileSystemTree;
}

export const FileTreeSchema = SchemaFactory.createForClass(FileTree);
