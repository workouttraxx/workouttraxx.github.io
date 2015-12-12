$(document).ready(function(){
    $('#blabla').smoothScroll();
    $.fn.needForCalc = function(){
        windowwidth = $(window).width();
        windowheight = $(window).height();
        contactHeight = $('#contact').height();
        onsverhaalHeight = $('#onsverhaal').height();
        mooiwerkHeight = $('#mooiwerk').height();
        navbarHeight = $('.logo-nav').height();
        scrollToOffset = (navbarHeight - 2);

    }
    $.fn.getElementHeight = function(element){
        elementHeight = $(element).height();
        return elementHeight;
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

        /* $("#button").click(function() {
         $('html, body').animate({
         scrollTop: $("#blabla").offset().top
         }, 2000);
         });*/


        $.fn.overlaySize = function(){
            var imagesize = $('#firstimageforsizecalc').outerWidth();
            //alert (imagesize);
            $('.overlay').css({width : imagesize });
            $('.img').css({width : imagesize });
            $('.img').css({padding : '0px'});

        };

        $(this).overlaySize();


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
            //var topoffset = 130;  //let op, moet voor smartphone straks anders !
            var speed = 1800;
            var destination = jQuery( target ).offset().top - topoffset;
            jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
                //window.location.hash = target;
            });
        };

        /* nav in topmenu */
        $('#hitonsverhaal').on("click", function(){
            $(this).scrollToElement('#onsverhaal',scrollToOffset,800);
        });
        $('#hitmooiwerk').on("click", function(){
            $(this).scrollToElement('#mooiwerk',scrollToOffset,800);
        });
        $('#hitcontact').on("click", function(){
            $(this).scrollToElement('#contact',scrollToOffset,800);
        });
        $('#hitinconcept').on("click", function(){
            $(this).scrollToElement('#inconcept',scrollToOffset,800);
        });


        /* open verborgen content */
        function opensesame() {
            $(this).needForCalc();
            var hittedElement = $(this);
            var sesame = $(this).parent().parent().prev('.sesame');
            //sesame.css("display","block");
            sesame.slideToggle( "slow", function() {
                //alert ("Doet het");
                if ((hittedElement.attr("data-tobeopened-type") == 'leesonsverhaal'))
                {
                    ($(hittedElement).text() === "Ons verhaal") ? $(hittedElement).text("Sluiten") : $(hittedElement).text("Ons verhaal");
                    var activeshare = $(this).parent().next('.sharestuff');
                    activeshare.stop().slideToggle( "slow", function() {
                    });
                    $(this).scrollToElement('#onsverhaal',scrollToOffset,800);
                };
                if ((hittedElement.attr("data-tobeopened-type") == 'leeswaarom'))
                {
                    ($(hittedElement).text() === "Lees waarom") ? $(hittedElement).text("Sluiten") : $(hittedElement).text("Lees waarom");
                    var activeshare = $(this).parent().next('.sharestuff');
                    activeshare.stop().slideToggle( "slow", function() {
                    });
                    $(this).scrollToElement('#sesamemooiwerk',scrollToOffset,800);
                };
                if ((hittedElement.attr("data-tobeopened-type") == 'bekijkwereldopzijnkop'))
                {
                    ($(hittedElement).text() === "Bekijk het") ? $(hittedElement).text("Sluiten") : $(hittedElement).text("Bekijk het");
                    var activeshare = $(this).parent().next('.sharestuff');
                    activeshare.stop().slideToggle( "slow", function() {
                    });
                    $(this).scrollToElement('#sesamewereldopzijnkop',scrollToOffset,800);
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



        // change behaviour of controller to animate scroll instead of jump
        controller.scrollTo(function (newpos) {
            var newpos = (newpos-defaultElementMargin); // added Xfact
            TweenMax.to(window, 0.8, {scrollTo: {y: newpos}});
        });

        /* //  bind scroll to anchor links
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
         */
        // show indicators (requires debug extension)
        scene.addIndicators();
    };

    /* projecten */
    $('.projects2').animate({ height: 0 },0); // verbergt laatste 6 projecten na laden pagina.s
    $('.toonmeerprojecten').click(function() {
        $(this).needForCalc();
        //alert ("Doet het");
        var eerste6projectenheight = $('.projects1').height();
        var hittedElement = $(this);
        var toggleHeight = $(".projects2").height() == 0 ? eerste6projectenheight : "0px";
        $(".projects2").animate({ height: toggleHeight },function(){
            //$(this).scrollToElement('#'+adviseurid,0,1500);
            if ($(".projects2").height() != 0){
                $(this).scrollToElement('.projects2',scrollToOffset,800);
                $(hittedElement).text("Minder werk");
            }
            if ($(".projects2").height() == 0){
                $(this).scrollToElement('.projects1',scrollToOffset,800);
                $(hittedElement).text("Meer werk");
            }
        })
        return false;
    });
    //$( ".projects2" ).show( "slide",{ to: { width: 280, height: 685 }}, 500);

    $(".map").gmap3({
            map: {
                options: {
                    maxZoom: 14
                }
            },
            marker:{
                address: "Wijhe, Withuisweg 7",
                options: {
                    icon: new google.maps.MarkerImage(
                        "/images/googlemaps-marker-inconcept.png",
                        new google.maps.Size(96, 24, "px", "px")
                    )
                }
            }
        },
        "autofit" );
    //$(".map").width("600px").height("350px").gmap3();

    $('#collage1').backstretch('/uploads/images/collage/collage01.jpg', {centeredX:true});
    $(this).scrollMagicMakeScenes();

});
