import RestaurantCard from "components/restaurant-card";

import { useRestaurants } from "../context";

import styles from "./styles.module.css";

function filterByTags(item, tags) {
  if (tags.length === 0) {
    return true;
  }
  const itemTags = item.tags.split(",");
  const found = tags.some((tag) => itemTags.includes(tag));
  return found;
}

function getItems({ items, tags }) {
  return items.filter((item) => filterByTags(item, tags));
}

function RestaurantsList({ items }) {
  const { tagsFilter: tags } = useRestaurants();
  return (
    <div className={styles["restaurants-list"]}>
      {getItems({ items, tags }).map((item) => {
        return <RestaurantCard key={item.name} {...item} />;
      })}
    </div>
  );
}

export default RestaurantsList;
