import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileTree, FileTreeSchema } from './schemas/filetree.schema';
import { FileTreeController } from './filetree.controller';
import { FileTreeService } from './filetree.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileTree.name, schema: FileTreeSchema },
    ]),
  ],
  controllers: [FileTreeController],
  providers: [FileTreeService],
})
export class FileTreeModule {}
