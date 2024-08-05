
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
document.addEventListener('DOMContentLoaded', function() {
    var hamburgerBtn = document.getElementById('hamburger-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    var closeBtn = document.getElementById('close-btn');
    var dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    var body = document.body;

    // Open/close mobile menu
    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.add('show');
        body.classList.add('menu-open'); // Lock scroll
    });

    closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
        body.classList.remove('menu-open'); // Unlock scroll
    });

    // Handle dropdown toggle
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var parent = this.parentElement;
            parent.classList.toggle('open');
            var dropdownContent = parent.querySelector('.mobile-dropdown-content');
            dropdownContent.style.display = parent.classList.contains('open') ? 'block' : 'none';
        });
    });
});

