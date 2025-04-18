# ReClaim BioPod Website

A modern, mobile-first website for ReClaim BioPod - a company that sells natural water filtration products made from mesquite wood chips and biochar.

## Project Overview

This website showcases three main products:
1. Aerobic System Polishing BioPod
2. Septic Field Saver BioPod
3. Rainwater Runoff Polisher BioPod

The site is built with HTML, CSS (using Tailwind CSS), and vanilla JavaScript for a fast, responsive user experience.

## Features

- Mobile-first, responsive design
- Modern UI with earth tones and natural imagery
- Product showcase pages with detailed information
- About page telling the company story
- Contact form for lead capture
- FAQ section
- Ready for future e-commerce integration

## Project Structure

```
reclaimbio.github.io/
├── css/
│   ├── input.css (Tailwind source)
│   └── styles.css (Compiled CSS)
├── js/
│   └── main.js
├── images/
│   └── (placeholder for images)
├── index.html
├── products.html
├── about.html
├── contact.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Setup and Development

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/reclaimbio/reclaimbio.github.io.git
cd reclaimbio.github.io
```

2. Install dependencies
```bash
npm install
```

3. Build the CSS
```bash
npm run build
```

4. For development with live CSS updates
```bash
npm run watch
```

## Deployment

This site can be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel.

For GitHub Pages:
1. Push the repository to GitHub
2. Go to repository settings
3. Under "GitHub Pages", select the main branch as the source
4. The site will be published at `https://reclaimbio.github.io`

## Customization

### Adding Images

Replace the placeholder images in the `/images` directory with actual product and brand images.

### Updating Content

Edit the HTML files to update content as needed. The structure is modular and easy to maintain.

### Styling

The site uses Tailwind CSS for styling. To customize:

1. Edit the `tailwind.config.js` file to update colors, fonts, etc.
2. Modify the `css/input.css` file for custom styles
3. Run `npm run build` to compile the changes

## Future Enhancements

- E-commerce integration
- Distributor login portal
- More detailed product specifications
- Installation guides and videos
- Expanded FAQ section
- Blog/news section

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Tailwind CSS for styling
