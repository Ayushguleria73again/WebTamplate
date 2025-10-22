# Dhuladhar River Cafe - Multi-Page Website

Welcome to the Dhuladhar River Cafe website! This is a fully responsive, multi-page website built with HTML, CSS (Tailwind CSS), and vanilla JavaScript.

## 📁 File Structure

```
WebTamplate/
├── index.html          # Home page with overview sections
├── about.html          # About Us page with mission, vision, timeline, and values
├── menu.html           # Menu page with detailed food and drink items
├── gallery.html        # Gallery page with image slider and photo grid
├── location.html       # Location page with map, contact info, and contact form
├── theme.js            # Theme toggle and mobile menu functionality
├── slider.js           # Image slider functionality
└── README.md           # This file
```

## 🎨 Features

### Multi-Page Navigation
- **Home (index.html)**: Landing page with hero section, story overview, menu highlights, gallery preview, and location info
- **About**: Detailed company story, mission, vision, timeline, and core values
- **Menu**: Complete menu organized by categories (Breakfast, Lunch, Drinks, Desserts, Snacks, Chef's Specials)
- **Gallery**: Beautiful image slider and photo grid showcasing the cafe
- **Location**: Interactive map, contact information, directions, and contact form

### Design Features
- **Dark/Light Theme Toggle**: Users can switch between light and dark modes (preference saved in localStorage)
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Image Slider**: Auto-advancing slider with manual controls and touch support
- **Smooth Animations**: Hover effects and transitions throughout

### Technical Features
- **CSS Variables**: Theme colors defined as CSS variables for easy customization
- **Modular JavaScript**: Separate JS files for slider and theme functionality
- **Touch Support**: Swipe gestures on mobile devices for the image slider
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🚀 How to Use

1. Open `index.html` in a web browser to start
2. Navigate between pages using the top navigation menu
3. Toggle dark/light theme using the moon/sun icon
4. On mobile, use the hamburger menu to navigate

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables at the top of each HTML file. You can customize:
- Light theme colors (primary, secondary, accent, text, highlight)
- Dark theme colors (primary, secondary, accent, text, highlight)

### Content
- Update text content directly in the HTML files
- Replace image URLs with your own images
- Modify menu items, prices, and descriptions in `menu.html`
- Update contact information in `location.html`

### JavaScript
- `theme.js`: Controls theme switching and mobile menu
- `slider.js`: Controls image slider functionality (auto-advance timing, transition speed)

## 📱 Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 📝 Notes

- All external dependencies are loaded via CDN (Tailwind CSS, Font Awesome)
- Images are currently using Unsplash URLs - replace with your own images for production
- The contact form is static - you'll need to add backend functionality for actual form submission
- Google Maps embed is set to Dharamshala, Himachal Pradesh - update the iframe src with your actual location

## 🛠️ Future Enhancements

Consider adding:
- Backend form submission
- Booking/reservation system
- Customer reviews section
- Blog or news section
- Social media feed integration
- Menu item search/filter functionality

---

Enjoy your new multi-page website! 🎉
