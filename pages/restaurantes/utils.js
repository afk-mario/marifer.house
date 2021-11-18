import { parseTableItems } from "lib/notion";

export function parseRestaurants(items) {
  return parseTableItems(items, schema);
}
