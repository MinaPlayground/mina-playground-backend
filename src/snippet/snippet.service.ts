import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Snippet, SnippetDocument } from './schemas/snippet.schema';
import { CreateSnippetDTO } from './dto/create-snippet.dto';

@Injectable()
export class SnippetService {
  constructor(
    @InjectModel(Snippet.name) private readonly snippet: Model<Snippet>,
  ) {}

  async create(createProjectDTO: CreateSnippetDTO): Promise<SnippetDocument> {
    return await this.snippet.create(createProjectDTO);
  }

  async findOne(id: string): Promise<Snippet> {
    return this.snippet.findOne({ _id: id }).exec();
  }
}
