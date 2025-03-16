# EventHub - Event Management Website

A modern, responsive event management website built with HTML, CSS, and JavaScript that allows users to search, filter, and view event details.

## Features

- **Search Functionality**: Search events by name, date range, and category
- **Event Filtering**: Filter events by multiple criteria including price, location, and type
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Modern UI**: Clean, intuitive interface with smooth animations and transitions
- **Performance Optimized**: Fast loading times with optimized images and lazy loading
- **User Preferences**: Local storage integration for saving user preferences

## Tech Stack

- HTML5
- CSS3 (with custom properties)
- JavaScript (ES6+)
- Bootstrap 5
- Lucide Icons

## Project Structure

```
├── index.html              # Homepage with search and featured events
├── events.html            # Event listing page with filters
├── event-details.html     # Detailed view of individual events
├── styles.css            # Global styles and custom CSS
├── js/
│   ├── main.js          # Main JavaScript functionality
│   ├── events.js        # Event listing page logic
│   └── event-details.js # Event details page logic
└── README.md            # Project documentation
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local server URL

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Preview the production build locally

## Design System

### Colors

- Primary: `#8B4513` (Saddle Brown)
- Secondary: `#654321` (Dark Brown)
- Background: `#FFF8F0` (Antique White)
- Text: `#333333` (Dark Gray)

### Typography

- Headings: 'Poppins', sans-serif
- Body: 'Inter', sans-serif

### Components

- **Cards**: Used for displaying event previews
- **Buttons**: Primary and secondary actions
- **Forms**: Search and filter inputs
- **Modals**: Event details and confirmations
- **Loading States**: Skeleton loaders and spinners

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance Optimization

- Debounced search (300ms delay)
- Lazy loading for images
- Minified assets
- Optimized event handling
- Local storage for user preferences

## Accessibility

- Semantic HTML structure
- ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

## Future Enhancements

- User authentication
- Event creation interface
- Ticket booking system
- Payment integration
- Social sharing features
- Email notifications
- Interactive maps
- Advanced search filters

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Unsplash](https://unsplash.com/) for the stock images
