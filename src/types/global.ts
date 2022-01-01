export interface IFile {
  title: string;
  type: "file";
}
export interface IFolder {
  title: string;
  type: "folder";
  children: (IFolder | IFile)[];
}
