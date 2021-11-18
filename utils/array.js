export function arrToggle(arr, item) {
  if (arr.includes(item)) {
    return arr.filter((i) => i !== item);
  }

  return [...arr, item];
}
