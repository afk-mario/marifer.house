import React from "react";
import classnames from "classnames";
import VisuallyHidden from "@reach/visually-hidden";
import { CustomCheckboxContainer, CustomCheckboxInput } from "@reach/checkbox";

import styles from "./styles.module.css";

const classNamePrefix = "checkbox";

function Checkbox({ className, onChange = () => {}, children, ...rest }) {
  const [checkedState, setChecked] = React.useState(rest.checked || false);
  const checked = rest.checked != null ? rest.checked : checkedState;
  const customClassName = classnames(
    styles[classNamePrefix],
    classNamePrefix,
    className,
    {
      [styles["-checked"]]: checked,
    }
  );
  return (
    <CustomCheckboxContainer
      className={customClassName}
      checked={rest.checked != null ? rest.checked : checked}
      onChange={(event) => {
        onChange(event);
        setChecked(event.target.checked);
      }}
    >
      <label>
        {children}
        <VisuallyHidden>
          <CustomCheckboxInput {...rest} />
        </VisuallyHidden>
      </label>
    </CustomCheckboxContainer>
  );
}

export default Checkbox;
