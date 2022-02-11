import { Client } from "@notionhq/client";

import { parseTableItems } from "lib/notion";

import RestaurantesView from "views/restaurantes";

export default function Restaurantes(props) {
  return <RestaurantesView {...props} />;
}

const likeMap = {
  "❤️": 3,
  "☺️": 2,
  "😐": 1,
  "😵‍💫": 0,
};

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export async function getServerSideProps() {
  const data = await notion.databases.query({
    database_id: "6bffedce10fe4d1da375d23aecb074d2",
  });

  const { results } = data;
  const items = parseTableItems(results).sort((a, b) => {
    const aValue = likeMap[a.like];
    const bValue = likeMap[b.like];
    return bValue - aValue;
  });

  const tags = [
    ...new Set(
      items
        .map(({ tags }) => tags.split(","))
        .reduce((acc, curr) => [...acc, ...curr], [])
    ),
  ];

  return {
    props: { items, tags },
  };
}
