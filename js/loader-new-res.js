$(document).ready(function(){

    $.fn.needForCalc = function(){
        windowwidth = $(window).width();
        windowheight = $(window).height();
        contactHeight = $('#contact').height();
        onsverhaalHeight = $('#onsverhaal').height();
        mooiwerkHeight = $('#mooiwerk').height();

    }
    $.fn.getElementHeight = function(element){
        elementHeight = $(element).height();
        return elementHeight;
    }

    $.fn.makeFullWindow = function(fullwindowelement,minuselement,backstretchimage){
        $(this).needForCalc();
        if (minuselement !=''){
            minuselementheight =  $(this).getElementHeight(minuselement);
        }
        $(fullwindowelement).css({
            "height" : windowheight-minuselementheight,
            "overflow" : "hidden",
            "width" : windowwidth,
            "margin-top": minuselementheight
        }).backstretch(backstretchimage, {centeredX:true});
    }


    $.fn.importProjects = function(){
        var url = '/projectoverzicht.html';
        var loadElementId = 'itemtoload';
        $(".loadprojectshere").load(url + ' #' + loadElementId,function(responseTxt,statusTxt,xhr){
            //var loadcontenthereheight = $('.loadcontenthere').height();
            //$('.loadcontenthere').height(loadcontenthereheight);
            //var importpaginatitel = $('#itemtoload').attr('title');
            //alert (importpaginatitel);
            if(statusTxt=="success"){}
            if(statusTxt=="error"){}
        });
    }
    //$(this).importProjects();




    /* $.fn.runEffect= function(){
     //alert ("Doet het");
     $( "#effect" ).toggleClass("newClass", 4000, function(){
     $(this).importProjects();
     } );
     //$( "#effect" ).toggle("explode", 500 );
     }*/


    /*$( "#button" ).click(function() {
     $(this).runEffect();
     });*/


    /*    $.fn.someFunction = function () {
     setTimeout(function() {
     // actions here
     }, 800, function() {});
     }*/


    /* resize timer */
    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();
    // voer uit na resize
    $(window).resize(function () {
        defaultElementMargin = $(this).getElementHeight('.logo-nav');
        $(this).needForCalc();
        $(this).makeFullWindow('.first','.logo-nav','/images/foto.jpg');
        $('#collage1').backstretch('/uploads/images/collage/collage01.jpg', {centeredX:true});
        waitForFinalEvent(function(){
            //alert('Resize...');
            //$(".closeafterloaded").toggle("fast");
            $(this).scrollMagicMakeScenes();
        }, 200 /* <<< vul timerdelay in */, "ladieda, uniqueId dingetje");
        //alert ("Resized");
    });


    /* navbar color */
    $.fn.navbarColor = function(){
        $('.logo-nav').toggleClass( "white" );
    }


    /* pagina geladen functies */
    $(this).needForCalc();
    $(this).makeFullWindow('.first','.logo-nav','/images/foto.jpg');

    $.fn.scrollMagicMakeScenes = function(){
        /* scrollmagic */
        // init controller
        defaultElementMargin = $(this).getElementHeight('.logo-nav');
        var controller = new ScrollMagic();

        // build scenes, de onderstaande moeten worden samengevoegd tot 1 functie met parameters
        var contactactive = new ScrollScene({triggerElement: "#contact", duration: contactHeight, triggerHook: "onProgress"})
            .addTo(controller)
            .on("enter leave", function (e) {
                if (e.type == "enter"){
                    $('.nav-contact').addClass('magentafont');
                    //alert ("Start");
                }
                if (e.type == "leave"){

                    $('.nav-contact').removeClass('magentafont');
                }
            });
        var mooiwerkactive = new ScrollScene({triggerElement: "#mooiwerk", duration: contactHeight, triggerHook: "onProgress"})
            //.setTween(tween)
            .addTo(controller)
            .on("enter leave", function (e) {
                if (e.type == "enter"){
                    $('.nav-mooiwerk').addClass('magentafont');
                    //alert ("Start");
                }
                if (e.type == "leave"){

                    $('.nav-mooiwerk').removeClass('magentafont');
                }
            });
        var onsverhaalactive = new ScrollScene({triggerElement: "#onsverhaal", duration: contactHeight, triggerHook: "onProgress"})
            .addTo(controller)
            .on("enter leave", function (e) {
                if (e.type == "enter"){
                    $('.nav-onsverhaal').addClass('magentafont');
                    //alert ("Start");
                }
                if (e.type == "leave"){

                    $('.nav-onsverhaal').removeClass('magentafont');
                }
            });


        // build scene
        var scene = new ScrollScene({triggerElement: ".second", duration: 0})
            .addTo(controller)
            .on("update", function (e) {
                //$("#scrollDirection").text(e.target.parent().info("scrollDirection"));
            })
            .on("enter leave", function (e) {
                $(this).navbarColor();
                //alert ("Doet het");
                //$("#state").text(e.type == "enter" ? "inside" : "outside");
            })
            .on("start end", function (e) {
                //$("#lastHit").text(e.type == "start" ? "top" : "bottom");
            })
            .on("progress", function (e) {
                //$("#progress").text(e.progress.toFixed(3));
            });


        $.fn.scrollToElement= function(target,topoffset,speed) {
            //var target = '#'+adviseurid;
            //var topoffset = 130; /* let op, moet voor smartphone straks anders ! */
            //var speed = 1800;
            var destination = jQuery( target ).offset().top - topoffset;
            jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
                //window.location.hash = target;
            });
        };








        /* open verborgen content */
        function opensesame() {
            //alert ("Doet het");
            var hittedElement = $(this);
            var sesame = $(this).parent().parent().prev('.sesame');
            //sesame.css("display","block");
            sesame.slideToggle( "slow", function() {
                //alert ("Doet het");
                if ((hittedElement.attr("data-tobeopened-type") == 'leesonsverhaal'))
                {
                    ($(hittedElement).text() === "Ons verhaal") ? $(hittedElement).text("Sluiten") : $(hittedElement).text("Ons verhaal");
                    var activeshare = $(this).parent().next('.sharestuff');
                    activeshare.stop().slideToggle( "slow", function() {});
                };
                if ((hittedElement.attr("data-tobeopened-type") == 'leeswaarom'))
                {
                    ($(hittedElement).text() === "Lees waarom") ? $(hittedElement).text("Sluiten") : $(hittedElement).text("Lees waarom");
                    var activeshare = $(this).parent().next('.sharestuff');
                    activeshare.stop().slideToggle( "slow", function() {});
                };

            });
        };
        $('.opensesame').unbind().on( "click",opensesame);

        if ($(".sesame").hasClass("closeafterloaded")){
            //alert ("Doet het");
            $(".closeafterloaded").toggle("fast");
        }
        //$('.projectimg').each(function(){$(this).addClass('img-responsive')});
        /*
         // build tween
         var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
         // build scene
         var scene = new ScrollScene({triggerElement: "#contact", duration: 600, triggerHook: "onEnter"})
         .setTween(tween)
         .addTo(controller);
         */

        var eerste6projectenheight = $('.projects').height();
        var returnheight = 100;
        $('.toonminderprojecten').on("click", function(){
            //alert ("Doet het");
            var hittedElement = $(this);
            $( ".volgende6projecten" ).animate({height: 1600}, 1500,function(){
                ($(hittedElement).text() === "Minder werk") ? $(hittedElement).text("Meer werk") : $(hittedElement).text("Minder werk");
                hittedElement.removeClass("toonminderprojecten");
                hittedElement.addClass("toonmeerprojecten");

            })

        });
        /* open en sluit meer projecten */

        $('.toonmeerprojecten').on("click", function(){
            var hittedElement = $(this);
            $( ".volgende6projecten" ).animate({height: eerste6projectenheight}, 1500,function(){
                ($(hittedElement).text() === "Meer werk") ? $(hittedElement).text("Minder werk") : $(hittedElement).text("Meer werk");
                hittedElement.removeClass("toonmeerprojecten");
                hittedElement.addClass("toonminderprojecten");

            })
        });






        // change behaviour of controller to animate scroll instead of jump
        controller.scrollTo(function (newpos) {
            var newpos = (newpos-defaultElementMargin); // added Xfact
            TweenMax.to(window, 0.8, {scrollTo: {y: newpos}});
        });

        //  bind scroll to anchor links
        $(document).on("click", "a[href^=#]", function (e) {
            var id = $(this).attr("href");
            if ($(id).length > 0) {
                e.preventDefault();

                // trigger scroll
                controller.scrollTo(id);

                // if supported by the browser we can even update the URL.
                if (window.history && window.history.pushState) {
                    history.pushState("", document.title, id);
                }
            }
        });

        // show indicators (requires debug extension)
        scene.addIndicators();

    }




    /*
     $.fn.centerQuotes = function(){
     $('.quote').each(){

     }
     }
     */

    $('#collage1').backstretch('/uploads/images/collage/collage01.jpg', {centeredX:true});
    $(this).scrollMagicMakeScenes();



});
