$(document).ready(function () {

    const select = $(".dropdown__select");
    const arrow = $(".dropdown__select__arrow");
    const selectMenu = $(".dropdown__select__list");

    selectMenu.css("display", "none");

    select.click(function() {
        arrow.toggleClass("dropdown__select__arrow--open");
        selectMenu.toggle();
    });


});