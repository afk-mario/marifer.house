import Tag from "components/tag";
import Checkbox from "components/checkbox";

// import { likeOptions, perksOptions, pricesOptions } from "./data";
const pricesOptions = [];
const likeOptions = [];
const perksOptions = [];

import styles from "./styles.module.css";
import { useRestaurantsDispatch, useRestaurants } from "../context";

function RestaurantesFilters({ tags = [] }) {
  const { tagsFilter } = useRestaurants();
  const { toggleTag } = useRestaurantsDispatch();
  const handleTags = (e) => {
    const { target } = e;
    const { value, checked } = target;
    toggleTag(value);
  };

  return (
    <section className={styles["filters"]}>
      <div className={styles["option-list"]}>
        {tags.map((option) => {
          return (
            <Checkbox
              value={option}
              key={option}
              checked={tagsFilter.includes(option)}
              name="tags"
              onChange={handleTags}
            >
              {option}
            </Checkbox>
          );
        })}
        {pricesOptions.map((option) => {
          return (
            <Checkbox value={option} key={option} name="prices">
              {option}
            </Checkbox>
          );
        })}
        {likeOptions.map((option) => {
          return (
            <Checkbox value={option} key={option} name="like">
              {option}
            </Checkbox>
          );
        })}
        {perksOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Checkbox value={option.value} key={option.value} name="perks">
              <Icon />
            </Checkbox>
          );
        })}
      </div>
    </section>
  );
}

export default RestaurantesFilters;
