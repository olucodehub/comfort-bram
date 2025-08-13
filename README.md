# 💑 Comfort & Bram Wedding Website

A beautiful, modern single-page wedding website celebrating the union of Comfort and Bram on **Friday, August 22nd, 2025** in the Netherlands.

## 🌟 Features

### ✨ Design & Experience
- **Elegant Nigerian-Dutch Cultural Design** - Warm colors reflecting both heritages
- **Fully Responsive** - Perfect viewing on mobile, tablet, and desktop
- **Smooth Animations** - Engaging scroll animations and transitions
- **Loading Screen** - Beautiful entrance with couple initials "C & B"
- **Countdown Timer** - Real-time countdown to wedding day
- **Weather Widget** - Current weather for wedding day

### 📱 Interactive Features
- **Mobile-First Navigation** - Hamburger menu and smooth scrolling
- **Photo Gallery** - Display couple photos and guest uploads
- **Photo Upload** - Drag-and-drop photo sharing with QR code
- **RSVP Form** - Complete form with validation and conditional fields
- **Interactive Maps** - Direct links to Google Maps for venues
- **FAQ Section** - Expandable frequently asked questions

### 🏛️ Wedding Information
- **Complete Schedule** - Detailed timeline from ceremony to reception
- **Venue Details** - Ceremony and reception location information
- **Travel Directions** - Driving and public transport options
- **Accommodation** - Recommended hotels with contact information
- **Menu Display** - Nigerian cuisine and international options
- **Cultural Context** - Explanation of Asoebi tradition and Nigerian dishes

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/comfort-bram-wedding.git
cd comfort-bram-wedding
```

### 2. Add Your Photos
Replace the placeholder images in the `images/` directory:

```
images/
├── couple-hero.jpg          # Main hero background (recommended: 1920x1080)
├── couple-1.jpg             # Gallery photo 1 (recommended: 800x600)
├── couple-2.jpg             # Gallery photo 2 (recommended: 800x600)
├── couple-3.jpg             # Gallery photo 3 (recommended: 800x600)
├── couple-4.jpg             # Gallery photo 4 (recommended: 800x600)
├── ceremony-venue.jpg       # Ceremony location photo (recommended: 800x600)
├── reception-venue.jpg      # Reception venue photo (recommended: 800x600)
├── favicon.ico              # Website favicon (32x32 px)
└── qr-placeholder.png       # QR code for photo uploads (300x300 px)
```

### 3. Customize Content
Edit the following sections in `index.html`:

#### Our Story Section (Line ~180)
```html
<!-- Replace placeholder text in timeline items -->
<p>Our beautiful love story began when fate brought us together... 
   [Add your personal story here - how you first met, where it was, what drew you to each other]</p>
```

#### Fun Facts Section (Line ~220)
```html
<!-- Add your personal information -->
<div class="fact-item">
    <h4>Comfort's Favorite</h4>
    <p>[Add Comfort's favorite things - food, hobby, movie, etc.]</p>
</div>
```

#### Contact Information (Line ~580)
```html
<!-- Update email and phone -->
<p>📧 <a href="mailto:comfort.bram.wedding@gmail.com">your-email@gmail.com</a></p>
<p>📞 <a href="tel:+31612345678">your-phone-number</a></p>
```

### 4. Deploy to GitHub Pages

#### Option A: Automatic Deployment
1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Save and wait for deployment

#### Option B: GitHub Actions (Advanced)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `css/styles.css` (Line 8):
```css
:root {
    --primary-gold: #D4AF37;        /* Change primary gold color */
    --primary-burgundy: #8B0000;    /* Change primary burgundy color */
    --primary-green: #228B22;       /* Change accent green color */
    --accent-orange: #FF6B35;       /* Change accent orange color */
}
```

### Fonts
Current fonts (Google Fonts):
- **Headers**: Playfair Display (serif)
- **Body**: Lato (sans-serif)

To change fonts, update the Google Fonts link in `index.html` (Line 22) and CSS variables (Line 26).

### Wedding Date
Update the countdown timer in `js/script.js` (Line 9):
```javascript
const WEDDING_DATE = new Date('2025-08-22T13:30:00+02:00'); // Update this date
```

### RSVP Form Integration
To connect the RSVP form to a backend service:

1. **Email Integration** - Use services like Formspree or Netlify Forms
2. **Google Sheets** - Use Google Apps Script
3. **Custom Backend** - Replace the `submitRSVP()` function in `js/script.js`

Example with Formspree:
```html
<form action="https://formspree.io/f/your-form-id" method="POST" class="rsvp-form">
```

### Photo Upload Integration
To enable real photo uploads:

1. **Azure Blob Storage** - Integrate with Azure Storage SDK
2. **AWS S3** - Use AWS SDK for JavaScript
3. **Google Drive API** - Upload to shared Google Drive folder
4. **Third-party services** - Use services like Cloudinary or Uploadcare

## 📱 Mobile Optimization

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🌐 Browser Support

- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+
- **Mobile Browsers** - iOS Safari 13+, Chrome Mobile 80+

## 🔧 Technical Details

### Performance
- **Optimized images** - Use WebP format for better compression
- **Lazy loading** - Images load as they come into view
- **Minimal dependencies** - Only Google Fonts, no JavaScript frameworks
- **Compressed CSS** - Minified for production

### SEO Features
- **Meta tags** - Complete Open Graph and Twitter Card meta tags
- **Structured data** - Schema.org markup for events
- **Semantic HTML** - Proper heading hierarchy and semantic elements
- **Alt text** - All images have descriptive alt attributes

### Accessibility
- **ARIA labels** - Screen reader friendly
- **Keyboard navigation** - Full keyboard support
- **Color contrast** - WCAG AA compliant
- **Focus indicators** - Clear focus states for all interactive elements

## 🎯 Cultural Elements

### Nigerian Heritage
- **Color scheme** inspired by Nigerian flag (green and white)
- **Asoebi tradition** explanation for international guests
- **Nigerian cuisine** detailed menu with cultural context
- **Typography** elegant serif fonts reflecting celebration

### Dutch Integration
- **Venue information** for Netherlands locations
- **Travel guides** for international guests
- **Multicultural celebration** theme throughout design

## 📞 Support

If you need help customizing the website:

1. **Check the documentation** in this README
2. **Review the code comments** - Detailed comments explain each section
3. **Test locally** - Open `index.html` in your browser to test changes
4. **GitHub Issues** - Open an issue for technical problems

## 📄 License

This wedding website template is provided as-is for personal use. Feel free to customize it for your own wedding celebration!

---

**Made with ❤️ for Comfort & Bram's special day**

*Celebrating love across cultures and continents* 🌍💕