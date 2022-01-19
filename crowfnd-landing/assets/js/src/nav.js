// Nav: Toggle icon and toggle class "active".
(function() {
    $('#burgerButton').on('click', function () {
        setActiveState("#nav","active");
        setActiveState("body","overlay");
        toggleAttr('#burgerIcon', 'src','assets/images/icon-hamburger.svg', 'assets/images/icon-close-menu.svg');
    });
}());