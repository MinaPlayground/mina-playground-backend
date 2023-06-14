import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Project } from './schemas/project.schema';
import { CreateProjectDTO } from './dto/create-project.dto';
import { ProjectService } from './project.service';
import { FileTreeService } from '../filetree/filetree.service';

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
      fileSystemTree: {
        test: {
          directory: {
            'testFile*js': {
              file: {
                contents:
                  'import { Field, SmartContract, state, State, method } from "snarkyjs";\n' +
                  '// test\n' +
                  'export class Add extends SmartContract {\n' +
                  '  @state(Field) num = State<Field>();\n' +
                  '\n' +
                  '  init() {\n' +
                  '    super.init();\n' +
                  '    this.num.set(Field(1));\n' +
                  '  }\n' +
                  '\n' +
                  '  @method update() {\n' +
                  '    const currentState = this.num.getAndAssertEquals();\n' +
                  '  }\n' +
                  '}\n',
              },
            },
            'testFile2*js': {
              file: {
                contents:
                  'import { Field, SmartContract, state, State, method } from "snarkyjs";\n' +
                  '// test\n' +
                  'export class Add extends SmartContract {\n' +
                  '  @state(Field) num = State<Field>();\n' +
                  '\n' +
                  '  init() {\n' +
                  '    super.init();\n' +
                  '    this.num.set(Field(1));\n' +
                  '  }\n' +
                  '\n' +
                  '  @method update() {\n' +
                  '    const currentState = this.num.getAndAssertEquals();\n' +
                  '  }\n' +
                  '}\n',
              },
            },
          },
        },
      },
    });
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
