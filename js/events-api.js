export async function loadEvents(url = './events.json') {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} while loading ${url}`);
  }

  return response.json();
}