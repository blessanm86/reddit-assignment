export function px2rem(px, base = 16) {
  if (typeof px === "number") {
    const size = px / base;
    const sizeRounded = Math.round(size);

    if (size === sizeRounded) {
      return `${size}rem`;
    }
    return `${size.toFixed(2)}rem`;
  }
  return px.map((value) => px2rem(value, base)).join(" ");
}
