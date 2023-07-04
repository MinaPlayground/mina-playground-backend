import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { FileSystemTree } from '../../../types';
import { Project } from '../../project/schemas/project.schema';

export type FileTreeDocument = HydratedDocument<FileTree>;

@Schema({ minimize: false })
export class FileTree {
  @Prop({ type: Map })
  fileSystemTree: FileSystemTree;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Project' })
  project_id: Project;
}

export const FileTreeSchema = SchemaFactory.createForClass(FileTree);
