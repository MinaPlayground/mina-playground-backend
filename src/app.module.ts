import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileTreeModule } from './filetree/filetree.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://arnout:<password>@minaplayground.il3cad4.mongodb.net/?retryWrites=true&w=majority',
    ),
    FileTreeModule,
  ],
})
export class AppModule {}
