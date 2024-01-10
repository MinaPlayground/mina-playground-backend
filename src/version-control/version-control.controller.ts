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

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<FileTree> {
  //   return this.fileTreeService.findOne(id);
  // }
  //
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
