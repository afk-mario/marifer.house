import { useRouter } from "next/router";

import ResaurantCard from "components/restaurant-card";

import Page from "layouts/page";

import RestaurantesFilters from "./restaurantes-filters";
import RestaurantsList from "./restaurantes-list";

import styles from "./styles.module.css";
import { RestaurantsProvider } from "./context";

function Restaurantes({ items = [], tags = [] }) {
  const { query: queryParams } = useRouter();
  const initialTagsFilter = queryParams.tags
    ? queryParams.tags.split(",")
    : null;

  return (
    <RestaurantsProvider initialTagsFilter={initialTagsFilter}>
      <Page title="Restaurantes" className={styles["page-restaurantes"]}>
        <RestaurantesFilters tags={tags} />
        <RestaurantsList items={items} />
      </Page>
    </RestaurantsProvider>
  );
}

export default Restaurantes;
