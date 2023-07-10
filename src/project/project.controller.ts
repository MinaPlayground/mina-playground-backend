import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Project } from './schemas/project.schema';
import { CreateProjectDTO } from './dto/create-project.dto';
import { ProjectService } from './project.service';
import { FileTreeService } from '../filetree/filetree.service';
import { zkAppTemplate } from '../templates/zkApp';

@Controller('project')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly fileTreeService: FileTreeService,
  ) {}

  @Post()
  async create(@Body() createProjectDTO: CreateProjectDTO) {
    const item = await this.projectService.create(createProjectDTO);
    await this.fileTreeService.create({
      project_id: item._id,
      fileSystemTree: zkAppTemplate,
    });
    return { project_id: item._id };
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    return this.projectService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.projectService.delete(id);
  }
}
