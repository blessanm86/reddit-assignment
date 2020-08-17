export async function fetchAndParse(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
}
