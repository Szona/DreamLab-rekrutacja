$(document).ready(function () {

    const item = $(".circle-box__circle--active");

    item.click(function(){
        $(this).removeClass("circle-box__circle--active").next().addClass("circle-box__circle--active");
        if (item.hasClass("circle-box__circle--active") == false) {
            item.first().addClass("circle-box__circle--active");
        }
        if (item.last().hasClass("circle-box__circle--active")) {
            item.last().addClass(("circle-box__circle--done"));
        }
    });

    


});