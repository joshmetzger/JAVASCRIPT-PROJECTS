$(document).ready(function(){

    // use chaining technique to use multiple animate event methods in the same function
    function shineLoop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    }

    // repeat shineLoop, set delayed amount of time btwn repeats.
    setInterval(shineLoop, 0);

    // shrink header size when user scrolls down 50px
    $(document).on("scroll", function() {
        if($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({

        // trigger images to slide down one after the other wehn the user's mouse enters the div area .
        mouseenter: function(){
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //trigger images to slide upand hide title when mouse elaves div
        mouseleave: function(){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        },
    })

    // toggle on each FAQ question by checking each element's sibling so they don't all display when ONE question is clicked.
    $('div.question').on('click', function(){
        $(this).next().slideToggle('slow');
    });
})