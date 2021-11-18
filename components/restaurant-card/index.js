import classnames from "classnames";

import { RiBankCard2Line, RiPlantLine, RiBankLine } from "react-icons/ri";

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
}) {
  const customClassName = classnames(
    styles[classNamePrefix],
    classNamePrefix,
    className,
    {}
  );
  return (
    <Card className={customClassName}>
      <header className={styles[`${classNamePrefix}-header`]}>
        <span className={styles[`${classNamePrefix}-like`]}>{like}</span>
        <h2>{name}</h2>
      </header>
      <div>
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
      </div>
      <Markdown>{description}</Markdown>
      <footer>
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
