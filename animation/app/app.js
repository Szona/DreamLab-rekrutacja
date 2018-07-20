$(document).ready(function () {

    const activeItem = $(".one");
    const itemTwo = $(".two");
    const itemThree = $(".three");

    let clickCount = 0;
    
    activeItem.click(function(){
        clickCount += 1;
        if (clickCount === 1) {
            activeItem.addClass("step1");
            itemTwo.addClass("step1");
            itemThree.addClass("step1");
        } else if (clickCount == 2) {
            activeItem.addClass("step2");
            itemThree.addClass("step2");
            activeItem.addClass("circle-box__circle--done")
        } else if (clickCount === 3) {
            clickCount = 0;
            activeItem.removeClass("circle-box__circle--done");
            activeItem.removeClass("step1 step2");
            itemTwo.removeClass("step1");
            itemThree.removeClass("step1 step2");
        }
    });

    

    


});