// 

$(function() {
	$("select[name='link_website']").change(function(){
		var url = $(this).val();
		window.open(url, '_blank');
	});

    var $mapArea = $(".place_area");

    var $txt = $(".place_area .bg01 li");

    var $active = $(".place_area .bg01 li.active");

    $txt.removeClass("on");

    $txt.find("a").css("padding-right", "20px");

    $active.find("a").css("padding-right", "22px");

    $txt.find("a").bind('mouseenter focusin', function() {

        $txt.removeClass("on");

        $(this).parent().addClass("on");

        $txt.find("a").css("padding-right", "20px");

        $(this).css("padding-right", "22px");

        $active.find("p").hide();

        $active.removeClass("active");

    }).bind('mouseleave focusout', function() {

        $txt.find("a").css("padding-right", "20px");

        $txt.removeClass("on");

    });

    $mapArea.find(".bg01 > div").mouseleave(function() {

        $txt.removeClass("on");

        $active.find("p").show();

        $active.addClass("active");

        $active.find("a").css("padding-right", "22px");

    });

    // �대떦 吏��� �섏씠吏� �몄떇

    $active.find("a").bind('mouseenter focusin', function() {

        $active.find("p").show();

        $active.find("a").css("padding-right", "22px");

    }).bind('mouseleave focusout', function() {

        $txt.removeClass("on");

    });

});

// 

$(function() {

    var $mapArea = $(".place_area");

    var $txt = $(".place_area .bg02 li");

    var $active = $(".place_area .bg02 li.active");

    $txt.removeClass("on");

    $txt.find("a").css("padding-right", "20px");

    $active.find("a").css("padding-right", "22px");

    $txt.find("a").bind('mouseenter focusin', function() {

        $txt.removeClass("on");

        $(this).parent().addClass("on");

        $txt.find("a").css("padding-right", "20px");

        $(this).css("padding-right", "22px");

        $active.find("p").hide();

        $active.removeClass("active");

    }).bind('mouseleave focusout', function() {

        $txt.find("a").css("padding-right", "20px");

        $txt.removeClass("on");

    });

    $mapArea.find(".bg02 > div").mouseleave(function() {

        $txt.removeClass("on");

        $active.find("p").show();

        $active.addClass("active");

        $active.find("a").css("padding-right", "22px");

    });

    // �대떦 吏��� �섏씠吏� �몄떇

    $active.find("a").bind('mouseenter focusin', function() {

        $active.find("p").show();

        $active.find("a").css("padding-right", "22px");

    }).bind('mouseleave focusout', function() {

        $txt.removeClass("on");

    });

});

// 

$(document).ready(function() {

    $(".fa-search").click(function() {

        $("#search-form").submit();

    });

    $(".list-five li").each(function() {

        if ($(this).hasClass('ul-active-five')) {

            $(this).parent().parent().addClass("ul-active-four active-one");

        }

    });

    $(".list-four li").each(function() {

        if ($(this).hasClass('ul-active-four')) {

            $(this).parent().parent().removeClass("li-mutil").addClass("ul-active-third");

        }

    });

    $(".list-third li").each(function() {

        if ($(this).hasClass('ul-active-third')) {

            $(this).parent().parent().removeClass("li-mutil").addClass("ul-active");

        }

    });

    $(".list-second li").each(function() {

        if ($(this).hasClass('ul-active')) {

            $(this).parent().parent().addClass("li-muti ul-active");

        }

    });

    $(".list-one li").each(function() {

        if ($(this).hasClass('ul-active')) {

            $(this).find('.list-second').show();

        }

    });

    $(".list-four li").each(function() {

        if ($(this).hasClass('ul-active-four')) {

            $(this).find('.list-five li').addClass('active-one');

            $(this).find('.list-five').show();

        }

    });

    if (typeof(url_vote) !== 'undefined') {

        $("#btn-vote").click(function() {

            if ($("input[name='place-product']:checked").length > 0) {

                var postdata = $.ajax({

                    url: url_vote + "?id=" + $("input[name='place-product']:checked").val(),

                    type: "post"

                });

                postdata.done(function(data) {

                    msg = $.parseJSON(data);

                    if (msg.check == 0) {

                        $('.notification2').slideDown('fast');

                        $('.notification2').delay(1000);

                        $('.notification2').slideUp('fast');

                    } else {

                        $('.notification1').slideDown('fast');

                        $('.notification1').delay(1000);

                        $('.notification1').slideUp('fast');

                        setTimeout(function() {
                            location.reload()
                        }, 2000);

                    }

                });

            } else {

                $('.notification').slideDown('fast');

                $('.notification').delay(1000);

                $('.notification').slideUp('fast');

            }

        });

    }

    $(".vote-2").click(function() {

        $(".vote-panel").hide();

        $(".vote-view").show();

    });

    $(".vote-3").click(function() {

        $(".vote-panel").show();

        $(".vote-view").hide();

    });

    var owl = $('.banner-img');

    owl.owlCarousel({

        margin: 0,

        nav: true,

        navText: ['<img src="img/icon-07.png" alt="">', '<img src="img/icon-14.png" alt="">'],

        loop: true,

        dots: false,

        autoplay: true,

        autoplayTimeout: 6000,

        autoplayHoverPause: false,

        responsive: {

            0: {

                items: 1

            },

            600: {

                items: 1

            },

            1000: {

                items: 1

            }

        }

    })

});
$(document).ready(function() {

    var owl = $('.slide-detail');

    owl.owlCarousel({

        margin: 0,

        nav: false,

        navText: ['<img src="img/icon-07.png" alt="">', '<img src="img/icon-14.png" alt="">'],

        loop: true,

        dots: true,

        autoplay: true,

        smartSpeed: 100,

        animateIn: 'fadeIn', // add this

        animateOut: 'fadeOut',

        responsive: {

            0: {

                items: 1

            },

            600: {

                items: 1

            },

            1000: {

                items: 1

            }

        }

    })

});

$(document).ready(function() {

    var owl = $('.big-img-slide');

    owl.owlCarousel({

        margin: 0,

        nav: false,

        navText: ['<img src="img/icon-07.png" alt="">', '<img src="img/icon-14.png" alt="">'],

        loop: true,

        dots: false,

        autoplay: true,

        smartSpeed: 100,

        animateIn: 'fadeIn', // add this

        animateOut: 'fadeOut',

        responsive: {

            0: {

                items: 1

            },

            600: {

                items: 1

            },

            1000: {

                items: 1

            }

        }

    })

});
$(document).ready(function() {

    var owl = $('.gallery_slide_index');

    owl.owlCarousel({

        margin: 0,

        nav: false,

        navText: ['<img src="img/icon-07.png" alt="">', '<img src="img/icon-14.png" alt="">'],

        loop: true,

        dots: false,

        autoplay: true,

        smartSpeed: 100,

        animateIn: 'fadeIn', // add this

        animateOut: 'fadeOut',

        responsive: {

            0: {

                items: 1

            },

            600: {

                items: 1

            },

            1000: {

                items: 1

            }

        }

    })

});
$(document).ready(function() {

    var owl = $('.treasur-img');

    owl.owlCarousel({

        margin: 15,

        nav: false,

        navText: ['<img src="img/icon-07.png" alt="">', '<img src="img/icon-14.png" alt="">'],

        loop: true,

        dots: true,

        responsive: {

            0: {

                items: 1

            },

            600: {

                items: 3

            },

            1000: {

                items: 5

            }

        }

    })

});

$(document).ready(function() {
    var owl = $('.slide-treasure');
    owl.owlCarousel({

        margin: 10,

        nav: false,

        navText: ['<img src="img/icon-07.png" alt="">', '<img src="img/icon-14.png" alt="">'],

        loop: false,

        dots: true,

        responsive: {

            0: {

                items: 1

            },

            600: {

                items: 4

            },

            1000: {

                items: 4
            }
        }
    })
});


$(document).ready(function() {

    var sync1 = $("#sync1");

    var sync2 = $("#sync2");

    var slidesPerPage = 4; //globaly define number of elements per page

    var syncedSecondary = true;

    sync1.owlCarousel({

        items: 1,

        slideSpeed: 2000,

        nav: true,

        autoplay: true,

        dots: false,

        loop: true,

        responsiveRefreshRate: 200,

        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    }).on('changed.owl.carousel', syncPosition);

    sync2

        .on('initialized.owl.carousel', function() {

        sync2.find(".owl-item").eq(0).addClass("current");

    })

    .owlCarousel({

        items: slidesPerPage,

        dots: false,

        nav: true,

        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

        smartSpeed: 200,

        slideSpeed: 500,

        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel

        responsiveRefreshRate: 100

    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {

        //if you set loop to false, you have to restore this next line

        //var current = el.item.index;

        //if you disable loop you have to comment this block

        var count = el.item.count - 1;

        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {

            current = count;

        }

        if (current > count) {

            current = 0;

        }

        //end block

        sync2

            .find(".owl-item")

        .removeClass("current")

        .eq(current)

        .addClass("current");

        var onscreen = sync2.find('.owl-item.active').length - 1;

        var start = sync2.find('.owl-item.active').first().index();

        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {

            sync2.data('owl.carousel').to(current, 100, true);

        }

        if (current < start) {

            sync2.data('owl.carousel').to(current - onscreen, 100, true);

        }

    }

    function syncPosition2(el) {

        if (syncedSecondary) {

            var number = el.item.index;

            sync1.data('owl.carousel').to(number, 100, true);

        }

    }

    sync2.on("click", ".owl-item", function(e) {

        e.preventDefault();

        var number = $(this).index();

        sync1.data('owl.carousel').to(number, 300, true);

    });

});

// 

$(".bar-menu").click(function() {

    $(this).toggleClass("active");

    $(".menu-head").toggleClass("active");
    $(".menu-third").toggleClass("active");
    $(".push-menu").toggleClass("active");

});

if ($(window).width() > 768)

{

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll >= 50) {

            $(".menu-third").addClass("active");

        } else {

            $(".menu-third").removeClass("active");

        }

    });

};

if ($(window).width() < 1176)

{

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll >= 0) {

            $(".header-top").addClass("active");

            $(".breaking-news").addClass("active");

        } else {

            $(".header-top").removeClass("active");

            $(".breaking-news").removeClass("active");

        }

    });

};

function change_lang(url) {

    window.location.replace(url);

}

function submitForm(id) {

    $('#' + id).submit(function(e)

        {

                
            var postData = $(this).serializeArray();

                
            var formURL = $(this).attr("action");

            $.ajax(

                    {

                            
                    url: formURL,

                            type: "POST",

                            data: postData,

                            success: function(data, textStatus, jqXHR)

                             {

                        msg = jQuery.parseJSON(data);

                        if (msg.check == 0) {

                            $('#' + msg.alert).html("<p style='color:red'>" + msg.content + "</p>");

                        } else if (msg.check == 1) {

                            $('#' + msg.alert).html("<p style='color:#000'>" + msg.content + "</p>");

                            if (typeof msg.form !== 'undefined') {

                                $('#' + msg.form)[0].reset();

                            }

                        }

                                
                    },

                            error: function(jqXHR, textStatus, errorThrown)

                             {

                                }

                        
                });

                
            e.preventDefault();

            e.unbind();

        });

    $('#' + id).submit();

}
