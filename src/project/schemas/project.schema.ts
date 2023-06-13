import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  type: number;

  @Prop()
  visibility: boolean;

  @Prop()
  files_id: number;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
