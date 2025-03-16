import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { EventCard } from './components/EventCard';
import { EventModal } from './components/EventModal';
import { Event, SearchFilters } from './types';
import { events } from './data/events';
import { CalendarDays } from 'lucide-react';

function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'all',
    date: '',
  });
  
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery = event.title.toLowerCase().includes(filters.query.toLowerCase()) ||
                          event.description.toLowerCase().includes(filters.query.toLowerCase());
      
      const matchesCategory = filters.category === 'all' || event.category === filters.category;
      
      const matchesDate = !filters.date || event.date === filters.date;
      
      return matchesQuery && matchesCategory && matchesDate;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Event Locator</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar filters={filters} onFilterChange={setFilters} />
        
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={(event) => setSelectedEvent(event)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default App;