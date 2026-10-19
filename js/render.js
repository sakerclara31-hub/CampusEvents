
export function toCard(event) {
  const seatsLeft = event.capacity - event.registered;

  const seats = seatsLeft > 0
    ? `<p class="seats">${seatsLeft} seats left</p>`
    : `<p class="seats seats-full">Full</p>`;

  return `
    <article class="card">
      <span class="badge badge-${event.category.toLowerCase()}">
        ${event.category}
      </span>
      <h3>${event.title}</h3>
      <p class="meta">${event.date} · ${event.location}</p>
      ${seats}
    </article>
  `;
}

export function renderEvents(events, container) {
  container.innerHTML = events.length
    ? events.map(toCard).join('')
    : '<p class="status">No events in this category.</p>';
}

export function fillCategories(events, select) {
  const categories = [
    ...new Set(events.map((event) => event.category))
  ].sort();

  for (const category of categories) {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    select.append(option);
  }
}
