import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileTreeModule } from './filetree/filetree.module';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { VersionControlModule } from './version-control/version-control.module';
import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/?retryWrites=true&w=majority`,
    ),
    FileTreeModule,
    ProjectModule,
    VersionControlModule,
    SnippetModule,
  ],
})
export class AppModule {}
