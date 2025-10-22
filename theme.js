// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const mobileThemeBtn = document.getElementById('mobileThemeBtn');
const themeIcon = document.getElementById('themeIcon');
const mobileThemeIcon = document.getElementById('mobileThemeIcon');
const mobileThemeBtnIcon = document.getElementById('mobileThemeBtnIcon');
const body = document.body;

// Check for saved theme preference or use OS preference
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        if (themeIcon) themeIcon.innerHTML = '<i class="fas fa-sun"></i>';
        if (mobileThemeIcon) mobileThemeIcon.innerHTML = '<i class="fas fa-sun"></i>';
        if (mobileThemeBtnIcon) mobileThemeBtnIcon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        if (themeIcon) themeIcon.innerHTML = '<i class="fas fa-moon"></i>';
        if (mobileThemeIcon) mobileThemeIcon.innerHTML = '<i class="fas fa-moon"></i>';
        if (mobileThemeBtnIcon) mobileThemeBtnIcon.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Event listeners for theme toggle buttons
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

// Mobile Menu Functionality
const mobileMenu = document.getElementById('mobileMenu');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

if (openMenuBtn) {
    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}
