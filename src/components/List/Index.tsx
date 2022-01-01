import { IFile, IFolder } from "../../types/global";

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

export {};
