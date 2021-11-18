import Link from "next/link";
import classnames from "classnames";

import styles from "./styles.module.css";

const classNamePrefix = "header";

function Header({ className, children }) {
  const customClassName = classnames(
    styles[classNamePrefix],
    classNamePrefix,
    className,
    {}
  );
  return (
    <header className={customClassName} id="header">
      <Link href="/">
        <a>
          <h1>Marifer House</h1>
        </a>
      </Link>
      {children}
    </header>
  );
}

export default Header;
