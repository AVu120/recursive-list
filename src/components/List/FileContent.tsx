import styles from "./index.module.scss";
import FileIcon from "../Icons/File";

interface IFileContentProps {
  title: string;
}
const FileContent = ({ title }: IFileContentProps) => {
  return (
    <span className={styles.fileLineContent}>
      <FileIcon />
      {title}{" "}
    </span>
  );
};

export default FileContent;
