document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(item) {
        const link = item.querySelector('a');
        const subMenu = item.querySelector('.submenu');

        link.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSubMenu(subMenu);
        });
    });

    function toggleSubMenu(subMenu) {
        subMenu.classList.toggle('show');
    }
});
