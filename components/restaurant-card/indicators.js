import { CgInstagram } from "react-icons/cg";
import {
  RiBankCard2Line,
  RiPlantLine,
  RiBankLine,
  RiMap2Line,
} from "react-icons/ri";

import Indicator from "components/indicator";

import styles from "./styles.module.css";
const classNamePrefix = "restaurant-card";

function Indicators({ price, transfer, card, veganOptions, instagram, map }) {
  return (
    <div className={styles[`${classNamePrefix}-indicators`]}>
      <p>{price}</p>
      {transfer ? (
        <Indicator>
          <RiBankLine />
        </Indicator>
      ) : null}
      {card ? (
        <Indicator>
          <RiBankCard2Line />
        </Indicator>
      ) : null}
      {veganOptions ? (
        <Indicator>
          <RiPlantLine />
        </Indicator>
      ) : null}
      {instagram ? (
        <a href={instagram} rel="noopener noreferrer" target="_blank">
          <Indicator>
            <CgInstagram />
          </Indicator>
        </a>
      ) : null}
      {map ? (
        <a href={map} rel="noopener noreferrer" target="_blank">
          <Indicator>
            <RiMap2Line />
          </Indicator>
        </a>
      ) : null}
    </div>
  );
}

export default Indicators;
