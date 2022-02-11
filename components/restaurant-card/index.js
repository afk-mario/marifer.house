import classnames from "classnames";

import { CgInstagram } from "react-icons/cg";
import {
  RiBankCard2Line,
  RiPlantLine,
  RiBankLine,
  RiMap2Line,
} from "react-icons/ri";

import Card from "components/card";
import Tag from "components/tag";
import Indicator from "components/indicator";
import Markdown from "components/markdown";

import styles from "./styles.module.css";

const classNamePrefix = "restaurant-card";

function RestaurantCard({
  className,
  name,
  price,
  like,
  card,
  transfer,
  veganOptions,
  tags,
  description,
  instagram,
  map,
}) {
  const customClassName = classnames(
    styles[classNamePrefix],
    classNamePrefix,
    className,
    {}
  );

  return (
    <Card className={customClassName}>
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

      <header className={styles[`${classNamePrefix}-header`]}>
        <span className={styles[`${classNamePrefix}-like`]}>{like}</span>
        <h2 className={styles[`${classNamePrefix}-title`]}>{name}</h2>
      </header>

      {description ? (
        <div className={styles[`${classNamePrefix}-content`]}>
          <Markdown>{description}</Markdown>
        </div>
      ) : null}
      <footer className={styles[`${classNamePrefix}-footer`]}>
        <div className={styles[`${classNamePrefix}-tag-list`]}>
          {tags.split(",").map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </div>
      </footer>
    </Card>
  );
}

export default RestaurantCard;
