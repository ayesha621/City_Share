// function for naviogation links in the nav bar
function toggleMenu() {
        document.getElementById('cityMenu').classList.toggle('open');
    }
    document.addEventListener('click', function (e) {
        const menu = document.getElementById('cityMenu');
        const toggle = document.getElementById('cityToggle');
        if (!menu.contains(e.target) && e.target !== toggle) {
            menu.classList.remove('open');
        }
    });
    