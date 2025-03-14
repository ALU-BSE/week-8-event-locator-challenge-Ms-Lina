// Mock events data
const events = [
    {
        id: '1',
        title: 'Summer Music Festival',
        description: 'Join us for a day of live music performances featuring local and international artists.',
        date: '2024-07-15',
        time: '14:00',
        location: 'Central Park, New York',
        category: 'music',
        imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80'
    },
    {
        id: '2',
        title: 'Tech Conference 2024',
        description: 'Explore the latest innovations in technology with industry leaders.',
        date: '2024-06-20',
        time: '09:00',
        location: 'Convention Center, San Francisco',
        category: 'technology',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
    },
    {
        id: '3',
        title: 'Food & Wine Festival',
        description: 'Experience culinary delights from top chefs and wine experts.',
        date: '2024-08-05',
        time: '12:00',
        location: 'Downtown Plaza, Chicago',
        category: 'food',
        imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const eventsList = document.getElementById('eventsList');

    // Load search parameters from localStorage
    const searchParams = JSON.parse(localStorage.getItem('searchParams') || '{}');
    if (searchParams.query) searchInput.value = searchParams.query;
    if (searchParams.category) categoryFilter.value = searchParams.category;
    if (searchParams.date) dateFilter.value = searchParams.date;

    function filterEvents() {
        const query = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const date = dateFilter.value;

        return events.filter(event => {
            const matchesQuery = event.title.toLowerCase().includes(query) ||
                               event.description.toLowerCase().includes(query);
            const matchesCategory = category === 'all' || event.category === category;
            const matchesDate = !date || event.date === date;

            return matchesQuery && matchesCategory && matchesDate;
        });
    }

    function createEventCard(event) {
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card event-card h-100">
                    <img src="${event.imageUrl}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary">${event.category}</span>
                        <h5 class="card-title mt-2">${event.title}</h5>
                        <p class="card-text">${event.description}</p>
                    </div>
                    <div class="card-footer bg-white border-top-0">
                        <div class="d-flex align-items-center text-muted mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            ${new Date(event.date).toLocaleDateString()} at ${event.time}
                        </div>
                        <div class="d-flex align-items-center text-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            ${event.location}
                        </div>
                        <a href="event-details.html?id=${event.id}" class="btn btn-primary w-100 mt-3">View Details</a>
                    </div>
                </div>
            </div>
        `;
    }

    function updateEventsList() {
        const filteredEvents = filterEvents();
        eventsList.innerHTML = filteredEvents.length > 0
            ? filteredEvents.map(createEventCard).join('')
            : '<div class="col-12 text-center py-5"><p class="text-muted">No events found matching your criteria.</p></div>';
    }

    // Add event listeners
    searchInput.addEventListener('input', updateEventsList);
    categoryFilter.addEventListener('change', updateEventsList);
    dateFilter.addEventListener('change', updateEventsList);

    // Initial render
    updateEventsList();
});