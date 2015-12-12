$(document).ready(function(){

    $.fn.InitAndResizeCalc = function(){
        windowwidth = $(window).width();
        windowheight = $(window).height();
        // hoogte van het topmenu
        navbarHeight = $('#topnav').height();
        // hoogte van de revolution slider
        sliderheight = $('.tp-banner-container').height();
        $('.heightener').css({"height": navbarHeight});
        scrollToOffset = (navbarHeight);
        //subscribewidth = ($(window).width() - (a.language )

        //console.log('Calculations finished');
    }
    $(this).InitAndResizeCalc();

    // click & scroll // https://github.com/kswedberg/jquery-smooth-scroll // aangepast
    $(document).on('click','.hitter',function(e){
        e.preventDefault();
        var scrollTarget =  $(this).attr('data-scrolltarget');
        var scrollOffset =  $(this).attr('data-scrolloffsett');
        //alert (scrollTarget);
        //alert (scrollOffset);
        $.smoothScroll({
            offset: -scrollOffset,
            //offset: -130,
            autoCoefficient: 2,
            easing: 'swing',
            //scrollElement: $('#footerbuttons'),
            scrollTarget: '#'+scrollTarget,
            preventDefault: true
        });
        return false;
    })

    jQuery('.tp-banner').show().revolution(
        {
            dottedOverlay:"none",
            delay:8000,
            startwidth:1920,
            startheight:495,
            hideThumbs:200,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:4,
            hideTimerBar:"on",
            //navigationType:"none",
            //navigationArrows:"solo",
            //navigationStyle:"preview1",

            touchenabled:"on",
            onHoverStop:"off",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax:"scroll",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,20,30,40,50,60,70,80,90,100],

            keyboardNavigation:"off",

            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,

            shadow:0,
            fullWidth:"on",
            fullScreen:"off",

            spinner:"spinner4",

            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,

            shuffle:"off",

            autoHeight:"off",
            forceFullWidth:"on",
            hideThumbsOnMobile:"on",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,

            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0
        });



});
