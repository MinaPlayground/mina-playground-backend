export interface FileSystemTree {
  [name: string]: DirectoryNode | FileNode;
}

/**
 * Represents a directory, see {@link FileSystemTree}.
 */
export interface DirectoryNode {
  directory: FileSystemTree;
}

/**
 * Represents a file, see {@link FileSystemTree}.
 */
export interface FileNode {
  file: {
    /**
     * The contents of the file, either as a UTF-8 string or as raw binary.
     */
    contents: string | Uint8Array;
  };
}
