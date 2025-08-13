/**
 * Modern Wedding Website JavaScript
 * Comfort & Bram - August 22nd, 2025
 * Interactive features and animations
 */

// Wedding Date Configuration
const WEDDING_DATE = new Date('2025-08-22T13:30:00+02:00'); // 1:30 PM CEST

// DOM Elements
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    navbar: document.getElementById('navbar'),
    hamburger: document.getElementById('hamburger'),
    navMenu: document.getElementById('nav-menu'),
    countdown: {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    },
    rsvpForm: document.getElementById('rsvp-form'),
    photoInput: document.getElementById('photo-input'),
    photoUpload: document.getElementById('photo-upload'),
    guestGallery: document.getElementById('guest-gallery')
};

// Global State
let countdownInterval;
let isLoading = true;

/**
 * INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    console.log('🎉 Initializing Comfort & Bram Wedding Website');
    
    // Start loading sequence
    showLoadingScreen();
    
    // Initialize all features
    setTimeout(() => {
        initializeCountdown();
        initializeNavigation();
        initializeAnimations();
        initializeRSVPForm();
        initializePhotoUpload();
        initializeFAQ();
        initializeWeather();
        initializeMaps();
        
        // Hide loading screen after everything is ready
        setTimeout(hideLoadingScreen, 1500);
    }, 500);
}

/**
 * LOADING SCREEN
 */
function showLoadingScreen() {
    if (elements.loadingScreen) {
        elements.loadingScreen.style.display = 'flex';
        elements.loadingScreen.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    if (elements.loadingScreen) {
        elements.loadingScreen.classList.add('hidden');
        setTimeout(() => {
            elements.loadingScreen.style.display = 'none';
            isLoading = false;
            // Trigger animations after loading
            triggerScrollAnimations();
        }, 500);
    }
}

/**
 * COUNTDOWN TIMER
 */
function initializeCountdown() {
    if (!elements.countdown.days) return;
    
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    console.log('⏰ Countdown timer initialized');
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = WEDDING_DATE.getTime() - now;
    
    if (distance < 0) {
        // Wedding day has passed
        clearInterval(countdownInterval);
        displayWeddingComplete();
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM with animation
    updateCountdownElement(elements.countdown.days, days);
    updateCountdownElement(elements.countdown.hours, hours);
    updateCountdownElement(elements.countdown.minutes, minutes);
    updateCountdownElement(elements.countdown.seconds, seconds);
}

function updateCountdownElement(element, value) {
    if (!element) return;
    
    const formattedValue = value.toString().padStart(2, '0');
    if (element.textContent !== formattedValue) {
        element.style.transform = 'scale(1.1)';
        element.textContent = formattedValue;
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 150);
    }
}

function displayWeddingComplete() {
    const countdownContainer = document.querySelector('.countdown-container');
    if (countdownContainer) {
        countdownContainer.innerHTML = `
            <h3 class="countdown-title">🎉 We're Married! 🎉</h3>
            <p style="font-size: 1.2rem; color: white; margin-top: 20px;">
                Thank you to everyone who celebrated with us!
            </p>
        `;
    }
}

/**
 * NAVIGATION
 */
function initializeNavigation() {
    setupSmoothScrolling();
    setupMobileMenu();
    setupScrollEffects();
    
    console.log('🧭 Navigation initialized');
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                closeMobileMenu();
                
                // Smooth scroll to target
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveNavLink(this);
            }
        });
    });
}

function setupMobileMenu() {
    const hamburger = elements.hamburger;
    const navMenu = elements.navMenu;
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    if (elements.hamburger && elements.navMenu) {
        elements.hamburger.classList.remove('active');
        elements.navMenu.classList.remove('active');
    }
}

function setupScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update navbar background
        if (elements.navbar) {
            if (scrollTop > 100) {
                elements.navbar.classList.add('scrolled');
            } else {
                elements.navbar.classList.remove('scrolled');
            }
        }
        
        // Update active navigation based on scroll position
        updateActiveNavOnScroll();
        
        // Trigger animations
        if (!isLoading) {
            triggerScrollAnimations();
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                updateActiveNavLink(activeLink);
            }
        }
    });
}

/**
 * SCROLL ANIMATIONS
 */
function initializeAnimations() {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Initial animation trigger
    setTimeout(triggerScrollAnimations, 100);
    
    console.log('✨ Animations initialized');
}

function addAnimationClasses() {
    // Timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Schedule items
    document.querySelectorAll('.schedule-item').forEach((item, index) => {
        item.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    });
    
    // Venue cards
    document.querySelectorAll('.venue-card').forEach(card => {
        card.classList.add('fade-in');
    });
    
    // Hotel cards
    document.querySelectorAll('.hotel-card').forEach(card => {
        card.classList.add('fade-in');
    });
    
    // Menu sections
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Photo items
    document.querySelectorAll('.photo-item').forEach(item => {
        item.classList.add('zoom-in');
    });
    
    // FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.add('fade-in');
    });
}

function triggerScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    
    animatedElements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('animate')) {
            element.classList.add('animate');
        }
    });
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight + 100 && // Small buffer for early triggering
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) || (
        rect.top < windowHeight &&
        rect.bottom >= 0
    );
}

/**
 * RSVP FORM
 */
function initializeRSVPForm() {
    const form = elements.rsvpForm;
    if (!form) return;
    
    setupFormInteractions();
    setupFormValidation();
    setupFormSubmission();
    
    console.log('📝 RSVP form initialized');
}

function setupFormInteractions() {
    const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
    const plusOneGroup = document.getElementById('plus-one-group');
    const plusOneNameGroup = document.getElementById('plus-one-name-group');
    const dietaryGroup = document.getElementById('dietary-group');
    const messageGroup = document.getElementById('message-group');
    
    attendanceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const isAttending = this.value === 'yes';
            
            // Show/hide relevant form sections
            toggleFormSection(plusOneGroup, isAttending);
            toggleFormSection(dietaryGroup, isAttending);
            toggleFormSection(messageGroup, true); // Always show message
        });
    });
    
    // Plus-one radio handling
    const plusOneRadios = document.querySelectorAll('input[name="plusOne"]');
    plusOneRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const hasPlusOne = this.value === 'yes';
            toggleFormSection(plusOneNameGroup, hasPlusOne);
        });
    });
}

function toggleFormSection(element, show) {
    if (!element) return;
    
    if (show) {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 10);
    } else {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    }
}

function setupFormValidation() {
    const form = elements.rsvpForm;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    clearFieldError(event);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = 'color: #e74c3c; font-size: 0.9rem; margin-top: 5px;';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(event) {
    const field = event.target;
    field.style.borderColor = '';
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setupFormSubmission() {
    const form = elements.rsvpForm;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitRSVP();
        }
    });
}

function validateForm() {
    const form = elements.rsvpForm;
    const requiredFields = form.querySelectorAll('input[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        const event = { target: field };
        if (!validateField(event)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function submitRSVP() {
    const form = elements.rsvpForm;
    const submitButton = form.querySelector('.rsvp-submit');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const rsvpData = {};
    
    for (let [key, value] of formData.entries()) {
        rsvpData[key] = value;
    }
    
    // Add timestamp
    rsvpData.timestamp = new Date().toISOString();
    
    console.log('📧 RSVP Submission:', rsvpData);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showRSVPSuccess();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Reset form
        form.reset();
        hideConditionalSections();
    }, 2000);
}

function showRSVPSuccess() {
    const form = elements.rsvpForm;
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'rsvp-success';
    successDiv.style.cssText = `
        background: #27ae60;
        color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 20px;
        animation: fadeInUp 0.5s ease;
    `;
    successDiv.innerHTML = `
        <h4 style="margin-bottom: 10px;">🎉 Thank You!</h4>
        <p>Your RSVP has been received. We can't wait to celebrate with you!</p>
    `;
    
    form.parentNode.insertBefore(successDiv, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function hideConditionalSections() {
    const conditionalSections = [
        'plus-one-group',
        'plus-one-name-group',
        'dietary-group',
        'message-group'
    ];
    
    conditionalSections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });
}

/**
 * PHOTO UPLOAD
 */
function initializePhotoUpload() {
    if (!elements.photoInput || !elements.photoUpload) return;
    
    setupDragAndDrop();
    setupFileInput();
    generateQRCode();
    
    console.log('📷 Photo upload initialized');
}

function setupDragAndDrop() {
    const uploadArea = elements.photoUpload;
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });
    
    uploadArea.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    e.target.closest('.upload-area').classList.add('drag-over');
}

function unhighlight(e) {
    e.target.closest('.upload-area').classList.remove('drag-over');
}

function handleDrop(e) {
    const files = e.dataTransfer.files;
    handleFiles(files);
}

function setupFileInput() {
    elements.photoInput.addEventListener('change', function(e) {
        handleFiles(e.target.files);
    });
}

function handleFiles(files) {
    if (!files || files.length === 0) return;
    
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            processImageFile(file);
        }
    });
}

function processImageFile(file) {
    // Create file reader
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Create image preview
        const imageData = {
            name: file.name,
            size: file.size,
            data: e.target.result,
            timestamp: new Date().toISOString()
        };
        
        // Add to guest gallery
        addImageToGallery(imageData);
        
        // Store in local storage (in real implementation, upload to server)
        storeImageLocally(imageData);
        
        console.log('📸 Image processed:', file.name);
    };
    
    reader.readAsDataURL(file);
}

function addImageToGallery(imageData) {
    const guestGallery = elements.guestGallery;
    const noPhotosMessage = guestGallery.querySelector('.no-photos');
    
    if (noPhotosMessage) {
        noPhotosMessage.remove();
    }
    
    let photoGrid = guestGallery.querySelector('.guest-photo-grid');
    if (!photoGrid) {
        photoGrid = document.createElement('div');
        photoGrid.className = 'guest-photo-grid';
        guestGallery.appendChild(photoGrid);
    }
    
    const photoElement = document.createElement('div');
    photoElement.className = 'guest-photo-item';
    photoElement.style.cssText = `
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        opacity: 0;
        transform: scale(0.8);
    `;
    
    photoElement.innerHTML = `
        <img src="${imageData.data}" alt="Guest photo" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding: 10px; color: white; font-size: 0.8rem;">
            Uploaded just now
        </div>
    `;
    
    photoGrid.appendChild(photoElement);
    
    // Animate in
    setTimeout(() => {
        photoElement.style.opacity = '1';
        photoElement.style.transform = 'scale(1)';
    }, 100);
    
    // Add hover effect
    photoElement.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    photoElement.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

function storeImageLocally(imageData) {
    // In a real implementation, this would upload to Azure Storage or similar
    let storedImages = JSON.parse(localStorage.getItem('wedding-photos') || '[]');
    
    // Add new image (limit to prevent storage overflow)
    storedImages.push({
        name: imageData.name,
        timestamp: imageData.timestamp,
        size: imageData.size
    });
    
    // Keep only the last 50 photos
    if (storedImages.length > 50) {
        storedImages = storedImages.slice(-50);
    }
    
    localStorage.setItem('wedding-photos', JSON.stringify(storedImages));
}

function generateQRCode() {
    // In a real implementation, generate QR code pointing to photo upload URL
    const qrCodeElement = document.getElementById('qr-code');
    if (qrCodeElement) {
        // Placeholder QR code - replace with actual QR generation library
        qrCodeElement.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" fill="white"/>
                <rect x="20" y="20" width="110" height="110" fill="none" stroke="#333" stroke-width="2"/>
                <text x="75" y="80" text-anchor="middle" fill="#333" font-size="12">QR Code</text>
                <text x="75" y="100" text-anchor="middle" fill="#666" font-size="10">Photo Upload</text>
            </svg>
        `);
    }
}

/**
 * FAQ FUNCTIONALITY
 */
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    console.log('❓ FAQ initialized');
}

/**
 * WEATHER WIDGET
 */
function initializeWeather() {
    // In a real implementation, fetch weather data from API
    const weatherInfo = document.getElementById('weather-info');
    
    if (weatherInfo) {
        // Simulate weather update
        setTimeout(() => {
            updateWeatherDisplay();
        }, 2000);
    }
    
    console.log('🌤️ Weather widget initialized');
}

function updateWeatherDisplay() {
    // Placeholder weather data - replace with actual weather API
    const weatherData = {
        temperature: '22°C',
        condition: 'Partly Cloudy',
        icon: '⛅',
        humidity: '65%',
        windSpeed: '12 km/h'
    };
    
    const weatherDetails = document.querySelector('.weather-details');
    if (weatherDetails) {
        weatherDetails.innerHTML = `
            <span class="weather-icon">${weatherData.icon}</span>
            <span class="weather-temp">${weatherData.temperature}</span>
            <span class="weather-desc">${weatherData.condition}</span>
        `;
    }
}

/**
 * MAPS INTEGRATION
 */
function initializeMaps() {
    // Setup map buttons
    const mapButtons = document.querySelectorAll('.map-btn');
    
    mapButtons.forEach(button => {
        button.addEventListener('click', function() {
            // This would open Google Maps or similar
            console.log('🗺️ Opening map for:', this.textContent);
        });
    });
    
    console.log('🗺️ Maps initialized');
}

// Map opening functions
function openMap(location) {
    let mapsUrl = '';
    
    switch(location) {
        case 'ceremony':
            // Direct link to the ceremony location
            mapsUrl = 'https://www.google.com/maps/place/Kerkstraat+27,+6901+AA+Zevenaar/@51.9244018,6.0733597,17z/data=!3m1!4b1!4m6!3m5!1s0x47c79f68dd027e77:0x150a08c398af2bf4!8m2!3d51.9244018!4d6.0759346!16s%2Fg%2F11c5q3k7l8';
            break;
        case 'reception':
            // Direct link to Venue13 Velp
            mapsUrl = 'https://www.google.com/maps/place/Venue13/@51.9943113,5.9776709,17z/data=!3m1!4b1!4m6!3m5!1s0x47c7a38327143ac7:0x2e8a279256e24c4e!8m2!3d51.9943113!4d5.9802458!16s%2Fg%2F11qpz6z9qp';
            break;
    }
    
    if (mapsUrl) {
        window.open(mapsUrl, '_blank');
    }
}

/**
 * UTILITY FUNCTIONS
 */
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    if (!isLoading) {
        triggerScrollAnimations();
    }
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

/**
 * ERROR HANDLING
 */
window.addEventListener('error', function(e) {
    console.error('🚫 JavaScript Error:', e.error);
    
    // Don't break the user experience for minor errors
    if (e.error && e.error.message) {
        console.log('Attempting to continue despite error...');
    }
});

/**
 * PERFORMANCE MONITORING
 */
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${loadTime}ms`);
        }, 0);
    });
}

/**
 * ACCESSIBILITY ENHANCEMENTS
 */
function enhanceAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
        
        // Enter key on buttons
        if (e.key === 'Enter' && e.target.classList.contains('upload-area')) {
            elements.photoInput.click();
        }
    });
    
    // Add ARIA labels where needed
    const uploadArea = elements.photoUpload;
    if (uploadArea) {
        uploadArea.setAttribute('role', 'button');
        uploadArea.setAttribute('aria-label', 'Click or drag photos here to upload');
        uploadArea.setAttribute('tabindex', '0');
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

console.log('✅ Wedding website JavaScript loaded successfully!');
