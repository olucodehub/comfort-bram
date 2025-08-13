# 🎨 Wedding Website Customization Guide

## Step-by-Step Customization for Comfort & Bram

### 1. 📝 Personal Story & Content

#### Our Story Section (`index.html` lines 180-250)
Replace the placeholder text with your actual love story:

```html
<!-- How We Met -->
<p>Our beautiful love story began when fate brought us together at [LOCATION] in [YEAR]. 
   [Tell your actual story - where you met, what attracted you to each other, first impressions]</p>

<!-- First Date -->
<p>Our first date was at [LOCATION] where we [ACTIVITY]. 
   [Share what made it special, funny moments, when you knew there was chemistry]</p>

<!-- Building Life Together -->
<p>As our love grew stronger, we [MILESTONES]. 
   [Share key moments - moving in together, meeting families, travels, career moves]</p>

<!-- The Proposal -->
<p>[BRAM] proposed to [COMFORT] on [DATE] at [LOCATION]. 
   [Tell the proposal story - how it happened, emotions, the ring, celebrations]</p>
```

#### Fun Facts Section (`index.html` lines 220-240)
Add your personal details:

```html
<div class="fact-item">
    <h4>Comfort's Favorites</h4>
    <p>Food: [Jollof rice/favorite dish] | Hobby: [Dancing/reading/etc] | Movie: [Title]</p>
</div>
<div class="fact-item">
    <h4>Bram's Favorites</h4>
    <p>Food: [Stroopwafels/favorite dish] | Hobby: [Football/cycling/etc] | Movie: [Title]</p>
</div>
<div class="fact-item">
    <h4>Our Shared Love</h4>
    <p>[Traveling together/cooking/Netflix marathons/hiking/etc]</p>
</div>
<div class="fact-item">
    <h4>Dream Destination</h4>
    <p>[Bali/Japan/Maldives/etc] - where you want to honeymoon or travel</p>
</div>
```

### 2. 📞 Contact Information

#### RSVP Contact (`index.html` line 580)
Update with your real contact details:

```html
<div class="contact-info">
    <p>📧 <a href="mailto:comfort.bram2025@gmail.com">comfort.bram2025@gmail.com</a></p>
    <p>📞 <a href="tel:+31612345678">+31 6 1234 5678</a></p>
</div>
```

### 3. 🎨 Colors & Branding

#### Nigerian-Inspired Color Scheme (`css/styles.css` lines 8-20)
The current colors celebrate Nigerian heritage:

```css
:root {
    /* Nigerian Green & Gold Theme */
    --primary-gold: #D4AF37;        /* Nigerian gold/yellow */
    --primary-burgundy: #8B0000;    /* Rich burgundy for elegance */
    --primary-green: #228B22;       /* Nigerian green */
    --accent-orange: #FF6B35;       /* Warm accent color */
    
    /* Optional: Customize these colors */
    --nigerian-green: #008751;      /* Official Nigerian flag green */
    --nigerian-white: #FFFFFF;      /* Nigerian flag white */
}
```

#### Alternative Color Schemes
If you want different colors, here are some suggestions:

**Royal Purple & Gold** (regal theme):
```css
--primary-gold: #FFD700;
--primary-burgundy: #663399;
--primary-green: #9966CC;
--accent-orange: #FF6B35;
```

**Dusty Rose & Navy** (romantic theme):
```css
--primary-gold: #D4A574;
--primary-burgundy: #2C3E50;
--primary-green: #D4A5A5;
--accent-orange: #F39C12;
```

### 4. 📷 Photo Integration

#### Required Photos (place in `images/` folder):
1. **couple-hero.jpg** - Your main photo (1920x1080px)
2. **couple-1.jpg** to **couple-4.jpg** - Gallery photos (800x600px each)
3. **ceremony-venue.jpg** - Ceremony location photo
4. **reception-venue.jpg** - Reception venue photo
5. **favicon.ico** - Small browser icon (32x32px)

#### Photo Style Tips:
- **Consistent editing** - apply same filter/style to all photos
- **High quality** but compressed for web (under 500KB each)
- **Good lighting** - avoid grainy or dark photos
- **Mix of posed and candid** shots for personality

### 5. 🌍 Cultural Customization

#### Nigerian Cultural Elements Already Included:
- Green/gold color scheme from Nigerian flag
- Traditional Nigerian food menu
- Asoebi tradition explanation
- African-inspired patterns in design

#### Additional Cultural Touches You Can Add:

**Nigerian Phrases** (`index.html`):
```html
<!-- Add to thank you section -->
<p>"Ọjọ́ ìgbéyàwó wa ni!" (It's our wedding day!)</p>
<p>Thank you - "Ẹ ṣé" in Yoruba</p>
```

**Cultural Symbols** (add to CSS):
```css
/* Add Adinkra or Nigerian patterns as background */
.cultural-pattern {
    background-image: url('data:image/svg+xml;utf8,<svg>...</svg>');
}
```

### 6. 📱 Menu Customization

#### Nigerian Dishes (`index.html` lines 450-480)
The menu is already set, but you can add descriptions:

```html
<div class="menu-item">
    <h4>Jollof Rice</h4>
    <p>Nigeria's beloved spiced rice dish - prepared with [your family recipe/special ingredients]</p>
</div>
```

#### Add Dietary Information:
```html
<div class="menu-note">
    <p>🌱 Vegetarian options available | 🌾 Gluten-free alternatives upon request</p>
    <p>Please indicate dietary requirements in your RSVP</p>
</div>
```

### 7. 🎵 Optional: Music & Media

#### Add Spotify Playlist (optional):
```html
<!-- Add to a new section -->
<section id="music" class="music">
    <div class="container">
        <h2>Our Wedding Playlist</h2>
        <iframe src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" 
                width="100%" height="380" frameborder="0"></iframe>
    </div>
</section>
```

#### Add Video Message (optional):
```html
<!-- Add to story section -->
<div class="video-message">
    <video controls width="100%">
        <source src="./videos/engagement-story.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

### 8. 🎯 RSVP Form Integration

#### Connect to Email Service:
Replace the form action in `index.html`:

**Using Formspree** (easiest):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="rsvp-form" id="rsvp-form">
```

**Using Netlify Forms**:
```html
<form name="wedding-rsvp" netlify class="rsvp-form" id="rsvp-form">
```

**Using Google Forms** (redirect):
Create a Google Form and link to it:
```html
<a href="https://forms.google.com/YOUR_FORM_ID" class="rsvp-submit" target="_blank">
    Complete RSVP on Google Forms
</a>
```

### 9. 🗓️ Calendar Integration

#### Add to Calendar Buttons:
```html
<div class="calendar-buttons">
    <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Comfort%20%26%20Bram%20Wedding&dates=20250822T113000Z/20250822T220000Z&details=Join%20us%20for%20our%20special%20day&location=Kerkstraat%2027%2C%206901%20AA%20Zevenaar%2C%20Netherlands" target="_blank" class="calendar-btn">
        📅 Add to Google Calendar
    </a>
    <a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20250822T113000Z
DTEND:20250822T220000Z
SUMMARY:Comfort & Bram Wedding
DESCRIPTION:Join us for our special day
LOCATION:Kerkstraat 27, 6901 AA Zevenaar, Netherlands
END:VEVENT
END:VCALENDAR" download="comfort-bram-wedding.ics" class="calendar-btn">
        📅 Download .ics File
    </a>
</div>
```

### 10. 🌐 Social Media Integration

#### Add Social Sharing:
```html
<div class="social-sharing">
    <h4>Share Our Joy</h4>
    <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_WEBSITE_URL" target="_blank">Share on Facebook</a>
    <a href="https://twitter.com/intent/tweet?text=Join%20Comfort%20%26%20Bram%20for%20their%20wedding&url=YOUR_WEBSITE_URL" target="_blank">Share on Twitter</a>
    <a href="whatsapp://send?text=Join%20Comfort%20%26%20Bram%20for%20their%20wedding%20YOUR_WEBSITE_URL" target="_blank">Share on WhatsApp</a>
</div>
```

#### Wedding Hashtag:
```html
<div class="wedding-hashtag">
    <h3>Share your photos with</h3>
    <p class="hashtag">#ComfortAndBram2025</p>
    <p class="hashtag">#NigerianDutchLove</p>
</div>
```

### 11. 📊 Analytics (Optional)

#### Google Analytics:
Add to `<head>` section of `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 12. 🔒 Final Checklist

Before going live:

- [ ] All personal information updated
- [ ] Photos added and optimized
- [ ] Contact information correct
- [ ] RSVP form connected
- [ ] Colors match your preference
- [ ] Mobile responsiveness tested
- [ ] All links working
- [ ] Spelling and grammar checked
- [ ] Cultural elements appropriate
- [ ] Loading speed optimized

### 🚀 Quick Deploy to GitHub Pages

1. **Create GitHub repository** named `comfort-bram-wedding`
2. **Upload all files** to the repository
3. **Go to Settings → Pages**
4. **Select "Deploy from a branch"**
5. **Choose "main" branch**
6. **Your site will be live at**: `https://yourusername.github.io/comfort-bram-wedding`

### 💡 Pro Tips

1. **Test on mobile first** - most guests will view on phones
2. **Keep it simple** - don't over-customize, the design is already beautiful
3. **Backup everything** - keep copies of all files and photos
4. **Update regularly** - add new photos and updates as you get closer to the wedding
5. **Share early** - send the link in your save-the-dates

---

**Happy customizing! Your love story deserves a beautiful website. 💕**