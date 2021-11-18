import classnames from "classnames";

import Tag from "components/tag";

import styles from "./styles.module.css";

const classNamePrefix = "card";

function Card({ className, children }) {
  const customClassName = classnames(
    styles[classNamePrefix],
    classNamePrefix,
    className,
    {}
  );

  return <article className={customClassName}>{children}</article>;
}

export default Card;
