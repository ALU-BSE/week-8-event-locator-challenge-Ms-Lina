// Mock events data (same as in events.js)
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
    // Get event ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    // Find the event in our data
    const event = events.find(e => e.id === eventId);

    if (!event) {
        // Handle event not found
        document.querySelector('main').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Event not found. <a href="events.html" class="alert-link">Return to events list</a>
            </div>
        `;
        return;
    }

    // Update the page with event details
    document.getElementById('eventImage').style.backgroundImage = `url(${event.imageUrl})`;
    document.getElementById('eventCategory').textContent = event.category;
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventDate').textContent = new Date(event.date).toLocaleDateString();
    document.getElementById('eventTime').textContent = event.time;
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventDescription').textContent = event.description;

    // Update page title
    document.title = `${event.title} - Event Locator`;
});