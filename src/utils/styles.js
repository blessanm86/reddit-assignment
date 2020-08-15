export function px2rem(px, base = 16) {
  if (typeof px === "number") {
    return `${px / base}rem`;
  }
  return px.map((value) => px2rem(value, base)).join(" ");
}
