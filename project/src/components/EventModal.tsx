import React from 'react';
import { X, Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
            {event.category}
          </span>
          
          <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
          
          <div className="space-y-3 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-3" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-3" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-3" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">{event.description}</p>
          
          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
}