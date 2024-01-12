import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Project } from '../../project/schemas/project.schema';

@Schema({ minimize: false, timestamps: true })
export class VersionControl {
  @Prop({ type: Map })
  files: object;

  @Prop()
  message: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Project' })
  project_id: Project;
}

export const VersionControlSchema =
  SchemaFactory.createForClass(VersionControl);
