import styles from "./index.module.scss";
import { useCallback, useEffect, useState } from "react";

interface IOption {
  label: string;
  action: () => void;
}

interface IContextMenuProps {
  options: IOption[];
}

const ContextMenu = ({ options }: IContextMenuProps) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint]
  );

  const handleClick = useCallback(() => {
    if (show) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return show ? (
    <ul
      className={styles.menu}
      style={{
        top: anchorPoint.y,
        left: anchorPoint.x,
      }}
    >
      {options.map((option) => (
        <li
          className={styles.listItem}
          onClick={option.action}
          key={option.label}
        >
          {option.label}
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};
export default ContextMenu;
