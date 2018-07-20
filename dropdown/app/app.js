$(document).ready(function () {

    const select = $(".dropdown__select");
    const arrow = $(".dropdown__select__arrow");
    const selectMenu = $(".dropdown__select__list");

    select.click(function() {
        arrow.toggleClass("dropdown__select__arrow--open");
        selectMenu.toggleClass("display");
    });


});