import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

export function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div 
      onClick={() => onClick(event)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
    >
      <img 
        src={event.imageUrl} 
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
          {event.category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="mr-4">{new Date(event.date).toLocaleDateString()} at {event.time}</span>
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
}