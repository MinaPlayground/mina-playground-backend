import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { FileSystemTree } from '../../../types';

export type FileTreeDocument = HydratedDocument<FileTree>;

@Schema()
export class FileTree {
  @Prop({ type: Map })
  fileSystemTree: FileSystemTree;

  @Prop({ type: SchemaTypes.ObjectId })
  project_id: Types.ObjectId;
}

export const FileTreeSchema = SchemaFactory.createForClass(FileTree);
