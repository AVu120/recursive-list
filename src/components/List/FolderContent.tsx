import styles from "./index.module.scss";
import ExpandArrowIcon from "../Icons/ExpandArrow";
import ExpandedArrowIcon from "../Icons/ExpandedArrow";
import ClosedFolderIcon from "../Icons/ClosedFolder";
import OpenFolderIcon from "../Icons/OpenFolder";

interface IFolderContentProps {
  onClick: () => void;
  isOpen: boolean;
  title: string;
}
const FolderContent = ({ onClick, isOpen, title }: IFolderContentProps) => {
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
};

export default FolderContent;
