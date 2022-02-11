import classnames from "classnames";

import Card from "components/card";
import Tag from "components/tag";
import Markdown from "components/markdown";

import Indicators from "./indicators";

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
      <div className={styles[`${classNamePrefix}-title-bar`]}>
        <div className={styles[`${classNamePrefix}-like-container`]}>
          <span className={styles[`${classNamePrefix}-like`]}>{like}</span>
        </div>
        <Indicators
          transfer={transfer}
          card={card}
          veganOptions={veganOptions}
          instagram={instagram}
          map={map}
          price={price}
        />
      </div>

      <header className={styles[`${classNamePrefix}-header`]}>
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
