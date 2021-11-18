import classnames from "classnames";

import styles from "./styles.module.css";

const classNamePrefix = "tag";

function Tag({ className, children }) {
  const customClassName = classnames(
    styles[classNamePrefix],
    classNamePrefix,
    className,
    {}
  );
  if (children === "") return null;
  return <span className={customClassName}>{children}</span>;
}

export default Tag;
