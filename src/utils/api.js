export function fetchAndParse(url) {
  return fetch(url).then((res) => res.json());
}
