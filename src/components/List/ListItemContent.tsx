import styles from "./index.module.scss";
import ExpandArrowIcon from "../Icons/ExpandArrow";
import ExpandedArrowIcon from "../Icons/ExpandedArrow";
import ClosedFolderIcon from "../Icons/ClosedFolder";
import OpenFolderIcon from "../Icons/OpenFolder";
import FileIcon from "../Icons/File";

interface IListItemContent {
  type: "folder" | "file";
  onClick: () => void;
  isOpen: boolean;
  title: string;
}
const ListItemContent = ({
  type,
  onClick,
  isOpen,
  title,
}: IListItemContent) => {
  if (type === "folder")
    return (
      <span className={styles.folderLineContent} onClick={onClick}>
        {isOpen ? (
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
    );

  return (
    <span className={styles.fileLineContent}>
      <FileIcon />
      {title}{" "}
    </span>
  );
};

export default ListItemContent;
