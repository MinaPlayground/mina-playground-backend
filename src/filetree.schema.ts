import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FileTreeDocument = HydratedDocument<FileTree>;

export interface IMeta {
  [index: string]: string | number | boolean | object | undefined;
}

@Schema()
export class FileTree {
  @Prop()
  name: string;

  @Prop({ type: Map })
  meta: IMeta;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const FileTreeSchema = SchemaFactory.createForClass(FileTree);
