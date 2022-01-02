import { IFile, IFolder } from "../../types/global";
import ClosedFolderIcon from "../Icons/ClosedFolder";
import OpenFolderIcon from "../Icons/OpenFolder";
import FileIcon from "../Icons/File";
import ExpandArrowIcon from "../Icons/ExpandArrow";
import ExpandedArrowIcon from "../Icons/ExpandedArrow";
import styles from "./index.module.scss";

interface IListProps {
  items: (IFolder | IFile)[];
  openFolderRecord: Record<string, boolean>;
  handleFolderClick: (id: string) => void;
}

const List = ({ items, openFolderRecord, handleFolderClick }: IListProps) => {
  return (
    <ul className={styles.unorderedList}>
      {items.map(
        ({
          type,
          title,
          children,
          id,
        }: (IFile | IFolder) & { children?: (IFile | IFolder)[] }) => {
          return (
            <li key={`Type:${type} Title:${title}`} className={styles.listItem}>
              {type === "folder" ? (
                <span
                  className={styles.folderLineContent}
                  onClick={() => handleFolderClick(id)}
                >
                  {openFolderRecord[id] ? (
                    <>
                      <ExpandedArrowIcon />
                      <OpenFolderIcon />
                    </>
                  ) : (
                    <>
                      <ExpandArrowIcon />
                      <ClosedFolderIcon />
                    </>
                  )}
                  {title}{" "}
                </span>
              ) : (
                <span className={styles.fileLineContent}>
                  <FileIcon />
                  {title}{" "}
                </span>
              )}
              {openFolderRecord[id] && !!children?.length && (
                <List
                  items={children}
                  openFolderRecord={openFolderRecord}
                  handleFolderClick={handleFolderClick}
                />
              )}
            </li>
          );
        }
      )}
    </ul>
  );
};

export default List;
