import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  VersionControl,
  VersionControlSchema,
} from './schemas/version-control.schema';
import { VersionControlController } from './version-control.controller';
import { VersionControlService } from './version-control.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VersionControl.name, schema: VersionControlSchema },
    ]),
  ],
  controllers: [VersionControlController],
  providers: [VersionControlService],
})
export class VersionControlModule {}
