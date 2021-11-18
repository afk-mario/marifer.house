export function blockToMarkdown(block) {
  const { type } = block;
  if (type !== "rich_text") {
    console.error(
      new Error("Triying to convert non rich text block to markdown")
    );
    return null;
  }

  return block.rich_text.reduce((acc, curr) => {
    const { plain_text: text, annotations } = curr;
    const { bold, code, italic, strikethrough } = annotations;

    let parsed = text;

    if (italic) {
      parsed = `_${parsed}_`;
    }
    if (bold) {
      parsed = `**${parsed}**`;
    }
    if (code) {
      parsed = `\`${parsed}\``;
    }
    if (strikethrough) {
      parsed = `~~${parsed}~~`;
    }

    return `${acc}${parsed}`;
  }, "");
}

export function propNameToKey(value) {
  const key = value
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join("");
  return `${key[0].toLowerCase()}${key.slice(1)}`;
}
