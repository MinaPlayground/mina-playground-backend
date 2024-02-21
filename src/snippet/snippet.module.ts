import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileTreeModule } from '../filetree/filetree.module';
import { Snippet, SnippetSchema } from './schemas/snippet.schema';
import { SnippetController } from './snippet.controller';
import { SnippetService } from './snippet.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Snippet.name, schema: SnippetSchema }]),
    FileTreeModule,
  ],
  controllers: [SnippetController],
  providers: [SnippetService],
})
export class SnippetModule {}
