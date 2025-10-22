// ============================================
// DHULADHAR RIVER CAFE - ENHANCEMENT FEATURES
// ============================================

// 1. SCROLL PROGRESS INDICATOR
function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--accent), var(--highlight));
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(progressBar);

    // Update progress on scroll
    function updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
}

// 2. BACK TO TOP BUTTON
function initBackToTop() {
    // Create button element
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--accent);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0;
        transform: scale(0.8);
    `;
    document.body.appendChild(backToTopBtn);

    // Show/hide button on scroll
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
            setTimeout(() => {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.transform = 'scale(1)';
            }, 10);
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.transform = 'scale(0.8)';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    backToTopBtn.style.display = 'none';
                }
            }, 300);
        }
    }

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effects
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.backgroundColor = 'var(--highlight)';
        backToTopBtn.style.transform = 'scale(1.1)';
    });

    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.backgroundColor = 'var(--accent)';
        backToTopBtn.style.transform = 'scale(1)';
    });

    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop(); // Initial call
}

// 3. PAGE LOADING ANIMATION
function initPageLoader() {
    // Create loader element
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="spinner"></div>
            <p style="color: var(--text); margin-top: 20px; font-size: 18px;">Loading...</p>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    `;

    // Add spinner styles
    const style = document.createElement('style');
    style.textContent = `
        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid var(--secondary);
            border-top: 4px solid var(--accent);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loader-content {
            text-align: center;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(loader);

    // Hide loader when page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 500); // Small delay for smooth transition
    });
}

// 4. SMOOTH SCROLL FOR ANCHOR LINKS (Enhanced)
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// 5. INITIALIZE ALL ENHANCEMENTS
function initAllEnhancements() {
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initScrollProgress();
            initBackToTop();
            initSmoothScroll();
        });
    } else {
        initScrollProgress();
        initBackToTop();
        initSmoothScroll();
    }
    
    // Page loader disabled
    // initPageLoader();
}

// Auto-initialize
initAllEnhancements();
