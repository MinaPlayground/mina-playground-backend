import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SnippetDocument = HydratedDocument<Snippet>;

@Schema()
export class Snippet {
  @Prop()
  name: string;

  @Prop()
  code: string;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);
