import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SnippetService } from './snippet.service';
import { CreateSnippetDTO } from './dto/create-snippet.dto';
import { Snippet } from './schemas/snippet.schema';

@Controller('snippet')
export class SnippetController {
  constructor(private readonly snippetService: SnippetService) {}

  @Post()
  async create(@Body() createProjectDTO: CreateSnippetDTO) {
    const item = await this.snippetService.create(createProjectDTO);
    return { snippet_id: item._id };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Snippet> {
    return this.snippetService.findOne(id);
  }
}
