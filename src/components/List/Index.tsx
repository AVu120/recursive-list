import { IFile, IFolder } from "../../types/global";
import ClosedFolderIcon from "../Icons/ClosedFolder";
import FileIcon from "../Icons/File";
interface IListProps {
  items: (IFolder | IFile)[];
}

const List = ({ items }: IListProps) => {
  return (
    <ul>
      {items.map(
        ({
          type,
          title,
          children,
        }: (IFile | IFolder) & { children?: (IFile | IFolder)[] }) => {
          return (
            <li key={`Type:${type} Title:${title}`}>
              {type === "folder" ? <ClosedFolderIcon /> : <FileIcon />}
              {`${type}: ${title}`}{" "}
              {!!children?.length && <List items={children} />}
            </li>
          );
        }
      )}
    </ul>
  );
};

export default List;
