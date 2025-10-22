// ============================================
// IMAGE LIGHTBOX FOR GALLERY
// ============================================

function initLightbox() {
    // Create lightbox HTML
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox">
                <i class="fas fa-times"></i>
            </button>
            <button class="lightbox-prev" aria-label="Previous image">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="lightbox-next" aria-label="Next image">
                <i class="fas fa-chevron-right"></i>
            </button>
            <img src="" alt="Lightbox image" class="lightbox-image">
            <div class="lightbox-counter"></div>
        </div>
    `;

    // Add lightbox styles
    const style = document.createElement('style');
    style.textContent = `
        #lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        #lightbox.active {
            display: block;
            opacity: 1;
        }

        .lightbox-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.95);
        }

        .lightbox-content {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .lightbox-image {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            animation: zoomIn 0.3s ease;
        }

        @keyframes zoomIn {
            from {
                transform: scale(0.8);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        .lightbox-close,
        .lightbox-prev,
        .lightbox-next {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            cursor: pointer;
            font-size: 24px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 10001;
        }

        .lightbox-close:hover,
        .lightbox-prev:hover,
        .lightbox-next:hover {
            background-color: rgba(255, 255, 255, 0.4);
            transform: scale(1.1);
        }

        .lightbox-close {
            top: 20px;
            right: 20px;
        }

        .lightbox-prev {
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
        }

        .lightbox-prev:hover {
            transform: translateY(-50%) scale(1.1);
        }

        .lightbox-next {
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
        }

        .lightbox-next:hover {
            transform: translateY(-50%) scale(1.1);
        }

        .lightbox-counter {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 16px;
        }

        @media (max-width: 768px) {
            .lightbox-image {
                max-width: 95%;
                max-height: 80%;
            }

            .lightbox-close,
            .lightbox-prev,
            .lightbox-next {
                width: 40px;
                height: 40px;
                font-size: 18px;
            }

            .lightbox-close {
                top: 10px;
                right: 10px;
            }

            .lightbox-prev {
                left: 10px;
            }

            .lightbox-next {
                right: 10px;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(lightbox);

    // Lightbox functionality
    let currentImageIndex = 0;
    let images = [];

    // Get all gallery images and slider images
    function collectImages() {
        images = [];
        
        // Gallery grid images
        const galleryImages = document.querySelectorAll('.gallery-grid img');
        galleryImages.forEach(img => {
            images.push({
                src: img.src,
                alt: img.alt || 'Gallery image'
            });
        });

        // Slider images (if on gallery page)
        const sliderImages = document.querySelectorAll('.slide');
        sliderImages.forEach(slide => {
            const bgImage = slide.style.backgroundImage;
            if (bgImage) {
                const url = bgImage.replace(/url\(['"]?([^'"]+)['"]?\)/, '$1');
                if (url && !images.some(img => img.src === url)) {
                    images.push({
                        src: url,
                        alt: 'Cafe image'
                    });
                }
            }
        });
    }

    // Open lightbox
    function openLightbox(index) {
        collectImages();
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Update image in lightbox
    function updateLightboxImage() {
        if (images.length === 0) return;
        
        const img = lightbox.querySelector('.lightbox-image');
        const counter = lightbox.querySelector('.lightbox-counter');
        
        img.src = images[currentImageIndex].src;
        img.alt = images[currentImageIndex].alt;
        counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }

    // Navigate to previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Event listeners
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);
    lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });

    // Attach click handlers to images
    function attachImageHandlers() {
        // Gallery grid images
        document.querySelectorAll('.gallery-grid img').forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openLightbox(index));
        });

        // Slider images
        document.querySelectorAll('.slide').forEach((slide, index) => {
            slide.style.cursor = 'pointer';
            slide.addEventListener('click', () => {
                const galleryCount = document.querySelectorAll('.gallery-grid img').length;
                openLightbox(galleryCount + index);
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachImageHandlers);
    } else {
        attachImageHandlers();
    }
}

// Auto-initialize
initLightbox();
