import { IFile, IFolder } from "../../types/global";
import ClosedFolderIcon from "../Icons/ClosedFolder";
import OpenFolderIcon from "../Icons/OpenFolder";
import FileIcon from "../Icons/File";
// import ExpandArrowIcon from "../Icons/ExpandArrow";
import styles from "./index.module.scss";
import { useState } from "react";

interface IListProps {
  items: (IFolder | IFile)[];
}

const List = ({ items }: IListProps) => {
  const [openFolderRecord, setOpenFolderRecord] = useState<
    Record<string, boolean>
  >({});

  const handleFolderClick = (id: string) => {
    setOpenFolderRecord({ ...openFolderRecord, [id]: !openFolderRecord[id] });
  };

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
              <span
                className={styles.lineContent}
                onClick={() => handleFolderClick(id)}
              >
                {type === "folder" ? (
                  openFolderRecord[id] ? (
                    <OpenFolderIcon />
                  ) : (
                    <ClosedFolderIcon />
                  )
                ) : (
                  <FileIcon />
                )}
                {title}{" "}
              </span>
              {openFolderRecord[id] && !!children?.length && (
                <List items={children} />
              )}
            </li>
          );
        }
      )}
    </ul>
  );
};

export default List;
