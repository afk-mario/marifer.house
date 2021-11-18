import { CgCreditCard } from "react-icons/cg";
import classnames from "classnames";

import styles from "./styles.module.css";

const classNamePrefix = "indicator";

function Indicator({ className, children }) {
  const customClassName = classnames(
    styles[classNamePrefix],
    classNamePrefix,
    className,
    {}
  );

  return <span className={customClassName}>{children}</span>;
}

export default Indicator;
