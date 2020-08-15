export async function fetchAndParse(url) {
  const response = await fetch(url);
  return await response.json();
}
