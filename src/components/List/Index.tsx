import { IFile, IFolder } from "../../types/global";
import ClosedFolderIcon from "../Icons/ClosedFolder";
import FileIcon from "../Icons/File";
import ExpandArrowIcon from "../Icons/ExpandArrow";
import styles from "./index.module.scss";

interface IListProps {
  items: (IFolder | IFile)[];
}

const List = ({ items }: IListProps) => {
  return (
    <ul className={styles.unorderedList}>
      {items.map(
        ({
          type,
          title,
          children,
        }: (IFile | IFolder) & { children?: (IFile | IFolder)[] }) => {
          return (
            <li key={`Type:${type} Title:${title}`} className={styles.listItem}>
              <span className={styles.lineContent}>
                {type === "folder" ? <ClosedFolderIcon /> : <FileIcon />}
                {title}{" "}
              </span>
              {!!children?.length && <List items={children} />}
            </li>
          );
        }
      )}
    </ul>
  );
};

export default List;
