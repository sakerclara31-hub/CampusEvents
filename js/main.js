
import { loadEvents } from './events-api.js';
import {
  renderEvents,
  fillCategories
} from './render.js';

const categorySelect = document.querySelector('#category');
const counter = document.querySelector('#counter');
const status = document.querySelector('#status');
const eventsContainer = document.querySelector('#events');

function show(events, category) {
  const filteredEvents = category === 'all'
    ? events
    : events.filter((event) => event.category === category);

  renderEvents(filteredEvents, eventsContainer);
  counter.textContent = `${filteredEvents.length} events`;
}

async function main() {
  try {
    status.textContent = 'Loading events...';

   const events = await loadEvents('./events.json');
    fillCategories(events, categorySelect);
    show(events, 'all');

    categorySelect.addEventListener('change', () => {
      show(events, categorySelect.value);
    });

    status.textContent = '';
  } catch (error) {
    status.textContent = `Could not load events: ${error.message}`;
    console.error(error);
  }
}

main();
