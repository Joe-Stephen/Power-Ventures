# Power Ventures - React TypeScript Application

A modern, responsive website for Power Ventures electrical solutions company built with React and TypeScript.

## Features

- **Hero Section**: Full-width image carousel with auto-advancing slides
- **Brands Section**: Scrolling brand showcase with hover effects
- **Products Section**: Categorized product display with filtering
- **Testimonials**: Customer reviews carousel
- **About Section**: Company information with features
- **Contact Section**: Contact form with validation
- **Responsive Design**: Mobile-first approach
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

Create a production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx & Navbar.css
│   ├── Hero.tsx & Hero.css
│   ├── Brands.tsx & Brands.css
│   ├── Products.tsx & Products.css
│   ├── Testimonials.tsx & Testimonials.css
│   ├── About.tsx & About.css
│   ├── Contact.tsx & Contact.css
│   └── Footer.tsx & Footer.css
├── App.tsx
├── App.css
├── index.tsx
└── index.css
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Modern styling with animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## Key Components

### Hero Component
- Auto-advancing carousel with 4 slides
- Manual navigation with dots
- Responsive design

### Products Component
- Category filtering system
- Product cards with hover effects
- Dynamic content rendering

### Testimonials Component
- Auto-advancing testimonial carousel
- Star ratings display
- Customer information

## Customization

### Adding New Products
Edit the `categories` array in `src/components/Products.tsx` to add new product categories or items.

### Modifying Brand List
Update the `brands` array in `src/components/Brands.tsx` to change the displayed brands.

### Styling Changes
Each component has its own CSS file for easy customization. The main styles are in `src/App.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for Power Ventures electrical solutions company.
