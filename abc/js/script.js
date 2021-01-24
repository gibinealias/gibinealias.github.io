;(function(){
    var backgrounds = new Array(
        'images/banners/1.jpg'
      , 'images/banners/2.jpg'
      , 'images/banners/3.jpg'
      , 'images/banners/4.jpg'
    );

    (function preload() {
        $(backgrounds).each(function(){
            $('<img/>')[0].src = this;
        });
        $('<img/>')[0].src = 'images/banners/5.jpg';
        $('<img/>')[0].src = 'images/banners/hand-shake.jpg';
    })();

    $(document).ready(function () {
        if ($('body').hasClass("teaser-home-page")){
            $('html').css('height','100%');
            $('body').css('overflow','hidden');
            $('.logo-black').load( function(){
                $('.loading-image').hide();
                $(this).animate({
                    opacity: 1,
                    width: "40%"
                },2500, function() {
                    $(this).animate({
                        width:"38%"
                    },1000, function() {
                        $(this).animate({
                            opacity:"0"
                        },400, function() {
                            $('body').css('overflow-y','scroll');
                            $(this).hide();
                            $('#slider1_container').animate({
                                opacity:1
                            },500, function() {
                                $('.logo').animate({
                                    opacity: "1",
                                    marginTop: "0%"
                                },1500);
                                $('.menu-bar').css('visibility', 'visible').animate({
                                    marginLeft: "18%",
                                    opacity:1
                                },1500, function() {
                                    $('.text-content > h2').addClass('typing-effect');
                                    $('.text-content > h3, .teaser-home-page .click-down').css({'opacity':'1'});
                                    var _SlideshowTransitions = [
                                        {$Duration:3000,x:1,$Delay:7,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInOutExpo,$Clip:$JssorEasing$.$EaseInOutQuad},$Round:{$Top:0.8}},
                                        {$Duration:3000,x:1,$Delay:7,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInOutExpo,$Clip:$JssorEasing$.$EaseInOutQuad},$Outside:true,$Round:{$Top:0.8}},
                                        {$Duration:3000,x:0.2,y:-0.1,$Delay:7,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseLinear,$Top:$JssorEasing$.$EaseOutWave,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Outside:true,$Round:{$Top:2}},
                                        {$Duration:3000,x:1,y:0.2,$Delay:7,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$JssorEasing$.$EaseInOutSine,$Top:$JssorEasing$.$EaseOutWave,$Clip:$JssorEasing$.$EaseInOutQuad},$Outside:true,$Round:{$Top:1.3}}
                                    ];
                                    var options = {
                                        $AutoPlay: true,
                                        $SlideshowOptions: {
                                            $Class: $JssorSlideshowRunner$,
                                            $Transitions: _SlideshowTransitions,
                                            $TransitionsOrder: 1,
                                            $ShowLink: true
                                        }
                                    };
                                    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
                                });
                            }); 
                        });    
                    });
                });
            }).attr('src', "images/logo-black.png");

            var $w = $(window).scroll(function(){
                if ($w.scrollTop() > $(".teaser-header").offset().top+200){
                    $('.text-content > h2').removeClass('typing-effect');
                }
                else{
                    $('.text-content > h2').addClass('typing-effect');
                }
                if ($w.scrollTop() >= $(".teaser-door").offset().top-100 && $w.scrollTop() < $(".teaser-door").offset().top+200){
                    $('.door-open > .door-panel').css("transition", "3s");
                    $('.door-open > .left-door').css("margin-left", "-150%");
                    $('.door-open > .right-door').css("margin-left", "150%");
                    $('.teaser-door > h1').css('color', '#000').animate({
                        opacity: '1'
                    },1000, function() {
                        $(".teaser-door > h3").css("opacity", "1");
                    });
                }
                else{
                    $('.door-open > .door-panel').css("transition", "1s");
                    $('.door-open > .left-door').css("margin-left", "-25%");
                    $('.door-open > .right-door').css("margin-left", "50%");
                    $('.teaser-door > h1').css('color', '#fff');
                }

                if ($w.scrollTop() >= $(".teaser-ethics").offset().top-100 && $w.scrollTop() < $(".teaser-ethics").offset().top+100){
                    if ($('.teaser-ethics > h2:first-of-type').css('opacity') == 0) {
                        $('.teaser-ethics > h2:first-of-type').animate({
                            opacity:1
                        },400, function(){
                            $('.teaser-ethics > h2:nth-of-type(2)').animate({
                                opacity:1
                            },400, function() {
                                $('.teaser-ethics > h2:last-of-type').animate({
                                    opacity:1
                                },600, function() {
                                    $('.teaser-ethics > h3').animate({height:"35%"},800);
                                });
                            });
                        });
                     }   
                }
                else{
                    if ($('.teaser-ethics > h2:first-of-type').css('opacity') == 1) {
                        $('.teaser-ethics > h2').animate({opacity:0},400);
                        $('.teaser-ethics > h3').animate({height:"0%"},400);
                    }
                }
            });

            $('.teaser-home-page .click-down').click(function(evt) {
                scrollThis(evt, -1);
            });
        }
        else if ($('body').hasClass("teaser-aboutus-page")){

        }
        else{
            changeBackground();
        }

        function changeBackground(){
            var current = 0;
            setInterval(function() {
                current++;
                current = current % backgrounds.length;
                $('.teaser-background-image').css('background-image', 'url('+backgrounds[current]+')');
            }, 5000);
        }

        if (! $('body').hasClass("no-scroll")){
            document.onkeydown = function (evt) {
                if (evt.keyCode == '38' || evt.keyCode == '33') {
                    scrollThis(evt, 1);
                } else if (evt.keyCode == '40' || evt.keyCode == '34' || evt.keyCode == '13') {
                    scrollThis(evt, -1);
                }
            }

            document.addEventListener('touchstart', handleTouchStart, false);
            document.addEventListener('touchmove', handleTouchMove, false);

            var xDown = null;
            var yDown = null;

            function handleTouchStart(evt){
                xDown = evt.touches[0].clientX;
                yDown = evt.touches[0].clientY;
            };

            function handleTouchMove(evt){
                var xDiff = xDown - evt.touches[0].clientX;
                var yDiff = yDown - evt.touches[0].clientY;
                if ( Math.abs(xDiff) <= Math.abs(yDiff)){
                    evt.preventDefault();
                    if (yDiff>0) {
                        scrollThis(evt, -1);
                    } else {
                         scrollThis(evt, 1);
                    }
                    return;
                }
                xDown = null;
                yDown = null;
            };

            (function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)
            var lastAnimation = 0;
            var animationTime = 800;
            var quietPeriod = 50;
            var self = $('header');

            $(document).mousewheel(scrollThis);
            function scrollThis(event, deltaY) {
                if (! $(".message-box").is(':visible')){
                    event.preventDefault();
                    var timeNow = new Date().getTime();
                    if(timeNow - lastAnimation < quietPeriod + animationTime) {
                        return;
                    }
                    if (deltaY < 0) {
                        if(self.next().length){
                            lastAnimation = timeNow;
                            self = self.next();
                            $("html,body").animate({scrollTop: self.offset().top }, animationTime);
                            rotateLeafIcon();
                        }
                    } else {
                        if(self.prev().length){
                            lastAnimation = timeNow;
                            self = self.prev();
                            $('html,body').animate({scrollTop: self.offset().top }, animationTime);
                            rotateLeafIcon();
                        }
                    }
                }
            }
            
            var lastScroll = 0;
            var isMouseScroll = false;
            window.addEventListener('scroll',function(evt){
                evt.preventDefault();
                if(!isMouseScroll) {
                    if(window.pageYOffset > lastScroll) {
                        scrollThis(evt, -1);
                    }
                    else{
                        scrollThis(evt, 1);
                    }
                    lastScroll = window.pageYOffset;
                }
                isMouseScroll = false;
            });

            var flagPlacement = "right";
            function rotateLeafIcon(){
                if ($('header > a').hasClass("logo-leaf")){
                    var angle=0;
                    rotateInterval = setInterval(function () { 
                        $('.logo-leaf').css({
                            transform:"rotate("+angle+"deg)"
                        });
                        angle=angle+2.5;
                        if (angle > 360){
                            clearInterval(rotateInterval);
                        }
                    },3);

                    if(flagPlacement == "right"){
                        var position=1;
                        moveInterval = setInterval(function () { 
                            $('.logo-leaf').css({
                                right: position+"%"
                            });
                            position = position+1;
                            if (position > 84){
                                clearInterval(moveInterval);
                            }
                        },7);
                        flagPlacement = "left";
                    }
                    else if(flagPlacement == "left"){
                        var position=84;
                        moveInterval = setInterval(function () { 
                            $('.logo-leaf').css({
                                right: position+"%"
                            });
                            position = position-1;
                            if (position < 1){
                                clearInterval(moveInterval);
                            }
                        },7);
                        flagPlacement = "right";
                    }
                }
            }
        }

        $(".borrower-quotation > .wrapper > nav").click(function() {
            $(".borrower-quotation > .wrapper > nav").removeClass('active-segment-heading');
            $(this).addClass('active-segment-heading');
            $(".borrower-quotation > .wrapper > nav > .content").hide();
            $("div", this).show();
        });

        $(".borrower-quotation > .wrapper > nav > .content > u > b").click(function() {
            $('.light-box, .message-box').show();
            $('body').css('overflow','hidden');
        });

        $('.partner-reasoning > .buttons > div').click(function() {
            $('.light-box, .message-box ').show();
            $('body').css('overflow','hidden');
        });

        $('.close-button, .light-box').click(function() {
            $('.light-box, .message-box ').hide();
            $('body').css('overflow','auto');
        });

        $(document).on('keyup',function(evt) {
            if (evt.keyCode == 27) {
                $('.light-box, .message-box').hide();
            }
        });

        $('input[type=radio][name=user_type]').change(function() {
            $('.teaser-interested-page > .teaser-header > .user-type > ul, .teaser-interested-page > .teaser-header > .user-type > input').show();
            $('.teaser-interested-page > .teaser-header > .user-type > ul > li').hide();
            $('#partnerTypeIndividualRadio').prop( "checked", true );
            if (this.value == 'Borrower') {
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .borrower-field').show();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-investor').prop('disabled', true);
                $('.teaser-interested-page > .teaser-header > .user-type .switch-partner').prop('disabled', true);
                $('.teaser-interested-page > .teaser-header > .user-type .switch-company').prop('disabled', false); 
            }
            else if (this.value == 'Investor') {
                $('.teaser-interested-page > .teaser-header > .user-type > ul > li:first-child > h3').html("Investor Type");
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .investor-field').show();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-investor').prop('disabled', false);
                $('.teaser-interested-page > .teaser-header > .user-type .switch-partner').prop('disabled', true);
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .company-field').hide();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-company').prop('disabled', true);
            }
            else if (this.value == 'Partner') {
                $('.teaser-interested-page > .teaser-header > .user-type > ul > li:first-child > h3').html("Partner Type");
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .partner-field').show();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-investor').prop('disabled', true);
                $('.teaser-interested-page > .teaser-header > .user-type .switch-partner').prop('disabled', false);
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .company-field').hide();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-company').prop('disabled', true);
            }
            $("html,body").animate({scrollTop: $('.teaser-interested-page > .teaser-header > .user-type').offset().top});
        });

        $('input[type=radio][name=investor_type]').change(function() {
            if (this.value == 'individual') {
                if($('input[name=user_type]:checked').val() == 'Investor'){
                    $('.teaser-interested-page > .teaser-header > .user-type > ul > .individual-field').show();
                    $('.teaser-interested-page > .teaser-header > .user-type .switch-individual').prop('disabled', false);
                }
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .company-field').hide();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-company').prop('disabled', true);
            }
            else if (this.value == 'company') {
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .company-field').show();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-company').prop('disabled', false); 
                $('.teaser-interested-page > .teaser-header > .user-type > ul > .individual-field').hide();
                $('.teaser-interested-page > .teaser-header > .user-type .switch-individual').prop('disabled', true);
            }
        });

        var typingTimer;
        $('#companyNameTextBox, #emailIdTextBox').on('input propertychange paste', function (){
            $('#companyDetailsTextBox').val('');
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, 1000);
        });

        function doneTyping() {
            if ($('body').hasClass("teaser-interested-page")){
                if($('.teaser-interested-page #companyNameTextBox').val().length > 1){
                    $('.teaser-interested-page > .teaser-header > .user-type > ul > li > img').show();
                    $.ajax({
                        type: "GET",
                        url: "/get_company_details/"+$('#companyNameTextBox').val(),
                        dataType: "json",
                        success: function (data) {
                            $('.teaser-interested-page > .teaser-header > .user-type > ul > li > img').hide();
                            $('#companyNamesList').html('');
                            $.each(data, function(i, value) {
                                $('#companyNamesList').append($('<li>').text(value.name).attr('companyDetails',value.number+'~'+value.status+'~'+value.sic+'~'+value.address+'~'+value.country));
                            });
                        }
                    });
                }
            }
            if ($('body').hasClass("teaser-help-page")){
                if(validateEmail($('.teaser-help-page #emailIdTextBox').val())){
                    $('.teaser-help-page > .teaser-header > .user-type > ul > li > img').show();
                    $.ajax({
                        type: "GET",
                        url: "/get_user_details/"+$('#emailIdTextBox').val(),
                        dataType: "json",
                        success: function (data) {
                            $('.teaser-help-page > .teaser-header > .user-type > ul > li > img').hide();
                        }   
                    });
                }

                function validateEmail(emailAddress) {
                    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    return regex.test(emailAddress);
                };
            }
        }

        $('#companyNamesList').on("click", "li", function(){
            $('#companyNameTextBox').val($(this).text());
            $('#companyDetailsTextBox').val($(this).attr('companyDetails'));
            $(this).parent().html('');
        });

        $('.numbersOnly').on('keyup blur input propertychange', function(){ 
            if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
               this.value = this.value.replace(/[^0-9\.]/g, '');
            }
        });

        $('.charOnly').on('keyup blur input propertychange', function(){ 
            if (this.value != this.value.replace(/[0-9\.]/g, '')) {
               this.value = this.value.replace(/[0-9\.]/g, '');
            }
        });
    });
})();