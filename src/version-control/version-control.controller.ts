import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VersionControlService } from './version-control.service';
import { CreateCommitDTO } from './dto/create-commit.dto';
import { VersionControl } from './schemas/version-control.schema';

@Controller('versionControl')
export class VersionControlController {
  constructor(private readonly versionControlService: VersionControlService) {}

  @Post()
  async create(@Body() createCommitDTO: CreateCommitDTO) {
    console.log(createCommitDTO);
    const item = await this.versionControlService.create(createCommitDTO);
    return { success: true };
    // await this.fileTreeService.create({
    //   project_id: item._id,
    //   fileSystemTree: zkAppTemplate,
    // });
    // return { project_id: item._id };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VersionControl[]> {
    return this.versionControlService.findOne(id);
  }

  @Get('/commit/:commitId')
  async findCommit(
    @Param('id') id: string,
    @Param('commitId') commitId: string,
  ): Promise<VersionControl[]> {
    return this.versionControlService.findCommit(id, commitId);
  }

  // @Delete(':id')
  // async delete(
  //   @Param('id') id: string,
  //   @Body() deleteFileTreeItemDTO: DeleteFileTreeItemDTO,
  // ) {
  //   return this.fileTreeService.delete(id, deleteFileTreeItemDTO);
  // }
  //
  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateFileTreeDTO: UpdateVersionControlDto,
  // ) {
  //   return this.fileTreeService.update(id, updateFileTreeDTO);
  // }
}
