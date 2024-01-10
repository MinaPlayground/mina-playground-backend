import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileTree } from './schemas/filetree.schema';
import { UpdateFileTreeDTO } from './dto/update-filetree.dto';
import { CreateFileTreeDTO } from './dto/create-filetree.dto';
import { DeleteFileTreeItemDTO } from './dto/delete-filetree-item.dto';

@Injectable()
export class FileTreeService {
  constructor(
    @InjectModel(FileTree.name) private readonly fileTree: Model<FileTree>,
  ) {}

  async create(createFileTreeDTO: CreateFileTreeDTO): Promise<FileTree> {
    const createdFileTree = await this.fileTree.create(createFileTreeDTO);
    return createdFileTree;
  }

  async findOne(id: string): Promise<FileTree> {
    return this.fileTree.findOne({ project_id: id }).exec();
  }

  async delete(id: string, deleteFileTreeItemDTO: DeleteFileTreeItemDTO) {
    return await this.fileTree
      .findByIdAndUpdate(
        { _id: id },
        {
          $unset: {
            [`fileSystemTree.${deleteFileTreeItemDTO.location}`]: '',
          },
        },
        { new: true },
      )
      .exec();
  }

  async update(id: string, updateFileTreeDTO: UpdateFileTreeDTO) {
    const { location, code, rename, locations } = updateFileTreeDTO;
    const path = `fileSystemTree.${location}`;
    // const isDirectory = location.endsWith('.directory');
    // if (rename) {
    //   return await this.fileTree
    //     .findByIdAndUpdate(
    //       { _id: id },
    //       {
    //         $rename: {
    //           [path]: `fileSystemTree.${rename}`,
    //         },
    //       },
    //       { new: true },
    //     )
    //     .exec();
    // }

    if (locations) {
      return await this.fileTree
        .findByIdAndUpdate(
          { _id: id },
          {
            $set: locations,
          },
          { new: true },
        )
        .exec();
    }

    // return await this.fileTree
    //   .findByIdAndUpdate(
    //     { _id: id },
    //     {
    //       $set: {
    //         [path]: isDirectory ? {} : code,
    //       },
    //     },
    //     { new: true },
    //   )
    //   .exec();
  }
}
