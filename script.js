document.getElementById('nav-toggle').onclick = function() {
    var navMenu = document.getElementById('nav-menu');
    var mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
    }
};
