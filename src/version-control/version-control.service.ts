import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommitDTO } from './dto/create-commit.dto';
import { VersionControl } from './schemas/version-control.schema';

@Injectable()
export class VersionControlService {
  constructor(
    @InjectModel(VersionControl.name)
    private readonly versionControl: Model<VersionControl>,
  ) {}

  async create(createCommitDTO: CreateCommitDTO): Promise<VersionControl> {
    console.log(createCommitDTO);
    return await this.versionControl.create(createCommitDTO);
  }

  async findOne(id: string): Promise<VersionControl[]> {
    return this.versionControl.find({ project_id: id }).exec();
  }

  async findCommit(id: string, commitId): Promise<VersionControl[]> {
    return this.versionControl.find({ _id: commitId }).exec();
  }

  // async delete(id: string, deleteFileTreeItemDTO: DeleteFileTreeItemDTO) {
  //   return await this.fileTree
  //     .findByIdAndUpdate(
  //       { _id: id },
  //       {
  //         $unset: {
  //           [`fileSystemTree.${deleteFileTreeItemDTO.location}`]: '',
  //         },
  //       },
  //       { new: true },
  //     )
  //     .exec();
  // }
}
