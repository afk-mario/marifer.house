import {
  getPropCheckbox,
  getPropMultiSelect,
  getPropPlainText,
  getPropRichText,
  getPropSelect,
  getPropUrl,
} from "./props";
import { propNameToKey } from "./utils";

export function parseTableItems(items) {
  return items.map((item) => {
    const { properties, last_edited_time: lastEditedTime } = item;
    const propArray = Object.entries(properties).map(([key, value]) => {
      const { type } = value;
      const slug = propNameToKey(key);

      switch (type) {
        case "title":
          return {
            slug,
            value: getPropPlainText(value),
          };
        case "url":
          return {
            slug,
            value: getPropUrl(value),
          };
        case "checkbox":
          return {
            slug,
            value: getPropCheckbox(value),
          };
        case "select":
          return {
            slug,
            value: getPropSelect(value),
          };
        case "multi_select":
          return {
            slug,
            value: getPropMultiSelect(value),
          };
        case "rich_text":
          return {
            slug,
            value: getPropRichText(value),
          };
        default:
          console.warn(`Prop type not supported ${type}`);
          return null;
      }
    });
    return propArray.reduce((acc, curr) => {
      acc[curr.slug] = curr.value;
      return acc;
    }, {});
  });
}
