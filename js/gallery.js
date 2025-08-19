// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Gallery elements
    const galleryGrid = document.getElementById('gallery-grid');
    const loadingIndicator = document.getElementById('loading-indicator');
    const noImagesDiv = document.getElementById('no-images');
    const imageCountSpan = document.getElementById('image-count');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCounter = document.getElementById('modal-counter');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Gallery state
    let images = [];
    let currentImageIndex = 0;
    let currentView = 'grid';

    // Image extensions to look for
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'];
    
    // Common image filenames to try (expandable list)
    const commonImageNames = [
        // Wedding photos
        'comfort1.jpg', 'comfort2.jpg', 'comfort3.jpg', 'comfort4.jpg',
        'comfort5.jpg', 'comfort6.jpg', 'comfort7.jpg', 'comfort8.jpg',
        'comfort9.jpg', 'comfort10.jpg',
        // Venue photos
        'Ceremony.png', 'Reception.png',
        // Common wedding photo names
        'wedding1.jpg', 'wedding2.jpg', 'wedding3.jpg', 'wedding4.jpg', 'wedding5.jpg',
        'bride.jpg', 'groom.jpg', 'couple1.jpg', 'couple2.jpg', 'couple3.jpg',
        'ceremony1.jpg', 'ceremony2.jpg', 'ceremony3.jpg',
        'reception1.jpg', 'reception2.jpg', 'reception3.jpg',
        'party1.jpg', 'party2.jpg', 'party3.jpg',
        // Number sequences
         '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        // PNG versions
        '1.png', '2.png', '3.png', '4.png', '5.png',
        'wedding1.png', 'wedding2.png', 'wedding3.png',
        // JPEG versions
        '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'
    ];

    // Function to load images
    async function loadImages() {
        try {
            // Try to load common image names
            console.log('Loading gallery images...');
            const imagePromises = commonImageNames.map(async (imageName) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        console.log(`✅ Loaded: ${imageName}`);
                        resolve({ name: imageName, valid: true });
                    };
                    img.onerror = () => {
                        console.log(`❌ Failed to load: ${imageName}`);
                        resolve({ name: imageName, valid: false });
                    };
                    img.src = `./images/${imageName}`;
                });
            });

            const imageResults = await Promise.all(imagePromises);
            const validImages = imageResults
                .filter(result => result.valid)
                .map(result => result.name);

            console.log(`Found ${validImages.length} valid images:`, validImages);

            if (validImages.length > 0) {
                images = validImages;
                displayImages();
            } else {
                showNoImages();
            }
        } catch (error) {
            console.error('Error loading images:', error);
            showNoImages();
        }
    }

    // Function to display images in the gallery
    function displayImages() {
        loadingIndicator.style.display = 'none';
        
        if (images.length === 0) {
            showNoImages();
            return;
        }

        // Update image count
        imageCountSpan.textContent = `${images.length} ${images.length === 1 ? 'photo' : 'photos'}`;

        // Clear existing gallery items
        galleryGrid.innerHTML = '';

        // Create gallery items
        images.forEach((imageName, index) => {
            const galleryItem = createGalleryItem(imageName, index);
            galleryGrid.appendChild(galleryItem);
        });

        // Show gallery with fade-in effect
        setTimeout(() => {
            galleryGrid.classList.add('loaded');
        }, 100);
    }

    // Function to create a gallery item
    function createGalleryItem(imageName, index) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = `./images/${imageName}`;
        img.alt = `Wedding photo ${index + 1}`;
        img.loading = 'lazy';
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-item-overlay';
        
        const info = document.createElement('div');
        info.className = 'gallery-item-info';
        info.textContent = `Photo ${index + 1}`;
        
        overlay.appendChild(info);
        item.appendChild(img);
        item.appendChild(overlay);
        
        // Add click event to open modal
        item.addEventListener('click', () => openModal(index));
        
        return item;
    }

    // Function to show no images message
    function showNoImages() {
        loadingIndicator.style.display = 'none';
        noImagesDiv.style.display = 'block';
        imageCountSpan.textContent = '0 photos';
    }

    // Modal functions
    function openModal(index) {
        currentImageIndex = index;
        updateModalImage();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateModalImage() {
        if (images.length === 0) return;
        
        const imageName = images[currentImageIndex];
        modalImage.src = `./images/${imageName}`;
        modalImage.alt = `Wedding photo ${currentImageIndex + 1}`;
        modalCounter.textContent = `${currentImageIndex + 1} of ${images.length}`;
    }

    function nextImage() {
        if (images.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateModalImage();
    }

    function prevImage() {
        if (images.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateModalImage();
    }

    // View toggle functions
    function toggleView(newView) {
        currentView = newView;
        
        // Update button states
        viewButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === newView);
        });
        
        // Update gallery class
        galleryGrid.className = `gallery-grid loaded ${newView}`;
    }

    // Event listeners
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    modalNext.addEventListener('click', nextImage);
    modalPrev.addEventListener('click', prevImage);

    // View control event listeners
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleView(btn.dataset.view);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });

    // Mobile touch navigation for modal
    let touchStartX = 0;
    let touchEndX = 0;

    modalImage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    modalImage.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                prevImage();
            } else {
                nextImage();
            }
        }
    }

    // Initialize gallery
    loadImages();

    // Enhanced hamburger menu functionality for gallery page
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    function setupNavigation() {
        if (hamburger && navMenu) {
            console.log('Setting up navigation...');
            
            // Toggle menu on hamburger click
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
                console.log('Menu toggled:', navMenu.classList.contains('active'));
            });

            // Close menu when clicking on links
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    console.log('Menu closed via link click');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        } else {
            console.error('Navigation elements not found');
        }
    }

    // Setup navigation
    setupNavigation();
});
