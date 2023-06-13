import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { CreateProjectDTO } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly project: Model<Project>,
  ) {}

  async create(createProjectDTO: CreateProjectDTO): Promise<ProjectDocument> {
    const createdProject = await this.project.create(createProjectDTO);
    return createdProject;
  }

  async findAll(): Promise<Project[]> {
    return this.project.find().exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.project.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedProject = await this.project
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedProject;
  }
}
