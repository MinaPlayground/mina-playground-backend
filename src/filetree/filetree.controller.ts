import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FileTree } from './schemas/filetree.schema';
import { CreateFileTreeDTO } from './dto/create-filetree.dto';
import { FileTreeService } from './filetree.service';
import { UpdateFileTreeDTO } from './dto/update-filetree.dto';

@Controller('fileTree')
export class FileTreeController {
  constructor(private readonly fileTreeService: FileTreeService) {}

  @Post()
  async create(@Body() createFileTreeDTO: CreateFileTreeDTO) {
    await this.fileTreeService.create(createFileTreeDTO);
  }

  @Get()
  async findAll(): Promise<FileTree[]> {
    return this.fileTreeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FileTree> {
    return this.fileTreeService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.fileTreeService.delete(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFileTreeDTO: UpdateFileTreeDTO,
  ) {
    return this.fileTreeService.update(id, updateFileTreeDTO);
  }
}
