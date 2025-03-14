// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mock events data
const events = [
    {
        id: 1,
        title: 'Jazz Night at Brown\'s',
        category: 'music',
        date: '2024-03-25',
        time: '20:00',
        location: 'Downtown Jazz Club',
        price: 45,
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80',
        description: 'An evening of smooth jazz and fine dining.'
    },
    {
        id: 2,
        title: 'Coffee Brewing Workshop',
        category: 'food',
        date: '2024-03-28',
        time: '14:00',
        location: 'Artisan Coffee House',
        price: 35,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80',
        description: 'Learn the art of coffee brewing from expert baristas.'
    },
    {
        id: 3,
        title: 'Vintage Wine Tasting',
        category: 'food',
        date: '2024-04-01',
        time: '18:00',
        location: 'Heritage Winery',
        price: 75,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
        description: 'Sample rare vintage wines with expert sommeliers.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize featured events
    displayFeaturedEvents();

    // Setup search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }

    // Setup search input with debounce
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearchInput, 300));
    }
});

function displayFeaturedEvents() {
    const featuredEventsContainer = document.getElementById('featuredEvents');
    if (!featuredEventsContainer) return;

    const eventCards = events.map(event => createEventCard(event)).join('');
    featuredEventsContainer.innerHTML = eventCards;
}

function createEventCard(event) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="event-card">
                <img src="${event.image}" alt="${event.title}" class="card-img-top">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">${event.category}</span>
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="d-flex align-items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>${new Date(event.date).toLocaleDateString()} at ${event.time}</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${event.location}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="fs-5 fw-bold">$${event.price}</span>
                        <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleSearch(e) {
    e.preventDefault();
    const searchButton = document.getElementById('searchButton');
    const spinner = searchButton.querySelector('.spinner-border');
    
    // Show loading state
    searchButton.disabled = true;
    spinner.classList.remove('d-none');

    // Simulate API call
    setTimeout(() => {
        const searchParams = new URLSearchParams({
            query: document.getElementById('searchInput').value,
            startDate: document.getElementById('startDate').value,
            endDate: document.getElementById('endDate').value,
            category: document.getElementById('categorySelect').value
        });

        // Redirect to events page with search parameters
        window.location.href = `events.html?${searchParams.toString()}`;
    }, 1000);
}

function handleSearchInput(e) {
    const query = e.target.value.toLowerCase();
    // Implement real-time search suggestions here
    console.log('Search query:', query);
}

// Save user preferences to localStorage
function saveUserPreferences() {
    const preferences = {
        category: document.getElementById('categorySelect').value,
        // Add other preferences as needed
    };
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Load user preferences from localStorage
function loadUserPreferences() {
    const preferences = JSON.parse(localStorage.getItem('userPreferences'));
    if (preferences) {
        document.getElementById('categorySelect').value = preferences.category;
        // Apply other preferences as needed
    }
}