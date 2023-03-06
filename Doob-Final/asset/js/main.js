$(document).ready(function () {
    // owl-slider
    $(".slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });


    // wow js
    new WOW().init();


    // jquery
    function hasClass(element, className) {
        return (element.className).indexOf(className) > -1;
    }

    // header-scrolltop
    $(window).scroll(function () {
        if (scrollY > 100) {
            $("header").addClass("header-sticky");
            $(".scroll-top").fadeIn(1000);
        } else if (scrollY < 80) {
            $("header").removeClass("header-sticky");
            $(".scroll-top").fadeOut(1000);
        }
    });

    // loader
    $(window).on("load", function () {
        $(".loader").fadeOut(1000);
        $("main").fadeIn(1000);
    });

    // mobile-menu
    $(".head-bar i").click(function () {
        $(".mobile-menu").addClass("mobile-menu-active");
    });
    $(".top-head-icon i").click(function () {
        $(".mobile-menu").removeClass("mobile-menu-active");
    });
    $(".mobile-link a").click(function () {
        $(".mobile-link ul").slideUp();
        $(this).next("ul").slideDown();
    });

    // color switcher
    $(".head-icon").click(function () {
        $("body").toggleClass("light-mode");
        $("footer,.testi-card").toggleClass("light-head");
        $("h3").toggleClass("color-black");
        $("#sun,#moon").toggleClass("theme-active");

        if ((hasClass(document.getElementById("theme-1"), 'on')) && (hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-1.svg");
        } else if ((hasClass(document.getElementById("theme-2"), 'on')) && (hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-2.svg");
        } else if ((hasClass(document.getElementById("theme-3"), 'on')) && (hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-3.svg");
        } else if ((hasClass(document.getElementById("theme-4"), 'on')) && (hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-4.svg");
        } else if ((hasClass(document.getElementById("theme-5"), 'on')) && (hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-5.svg");
        } else if ((hasClass(document.getElementById("theme-1"), 'on')) && (!hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/LOGO-1.svg");
        } else if ((hasClass(document.getElementById("theme-2"), 'on')) && (!hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/LOGO-2.svg");
        } else if ((hasClass(document.getElementById("theme-3"), 'on')) && (!hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/LOGO-3.svg");
        } else if ((hasClass(document.getElementById("theme-4"), 'on')) && (!hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/LOGO-4.svg");
        } else if ((hasClass(document.getElementById("theme-5"), 'on')) && (!hasClass(document.getElementById("body"), 'light-mode'))) {
            $(".logos").attr("src", "./asset/images/LOGO-5.svg");
        }
    });

    $(".color-icon").click(function () {
        $(".color-switch").toggleClass("switch");
        $(".color-switch i").toggleClass("color-rotate");
    });

    $("#theme-1").click(function () {
        $(":root").css({
            "--color-primary": "#059dff",
            "--color-tertiary": "#6549d5",
            "--color-pink": "#e33fa1",
            "--color-secondary": "#fb5343",
        });
        $(this).addClass("on");
        $("#theme-2,#theme-3,#theme-4,#theme-5").removeClass("on");

        if (hasClass(document.getElementById("body"), 'light-mode')) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-1.svg");
        } else {
            $(".logos").attr("src", "./asset/images/LOGO-1.svg");
        }
    });
    $("#theme-2").click(function () {
        $(":root").css({
            "--color-primary": "#ffb643",
            "--color-tertiary": "#aba56c",
            "--color-pink": "#586d36",
            "--color-secondary": "#ef7921",
        });
        $(this).addClass("on");
        $("#theme-1,#theme-3,#theme-4,#theme-5").removeClass("on");

        if (hasClass(document.getElementById("body"), 'light-mode')) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-2.svg");
        } else {
            $(".logos").attr("src", "./asset/images/LOGO-2.svg");
        }
    });
    $("#theme-3").click(function () {
        $(":root").css({
            "--color-primary": "#BEF244",
            "--color-tertiary": "#F58484",
            "--color-pink": "#E3A96F",
            "--color-secondary": "#D0CD59",
        });
        $(this).addClass("on");
        $("#theme-2,#theme-1,#theme-4,#theme-5").removeClass("on");

        if (hasClass(document.getElementById("body"), 'light-mode')) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-3.svg");
        } else {
            $(".logos").attr("src", "./asset/images/LOGO-3.svg");
        }
    });
    $("#theme-4").click(function () {
        $(":root").css({
            "--color-primary": "#805174",
            "--color-tertiary": "#BD8078",
            "--color-pink": "#432371",
            "--color-secondary": "#FAAE7B",
        });
        $(this).addClass("on");
        $("#theme-2,#theme-3,#theme-1,#theme-5").removeClass("on");

        if (hasClass(document.getElementById("body"), 'light-mode')) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-4.svg");
        } else {
            $(".logos").attr("src", "./asset/images/LOGO-4.svg");
        }
    });
    $("#theme-5").click(function () {
        $(":root").css({
            "--color-primary": "#43D37D",
            "--color-tertiary": "#49AE87",
            "--color-pink": "#68C8C3",
            "--color-secondary": "#86E1FF",
        });
        $(this).addClass("on");
        $("#theme-2,#theme-3,#theme-4,#theme-1").removeClass("on");

        if (hasClass(document.getElementById("body"), 'light-mode')) {
            $(".logos").attr("src", "./asset/images/logo-dark/LOGO-DARK-5.svg");
        } else {
            $(".logos").attr("src", "./asset/images/LOGO-5.svg");
        }
    });

});

// pointer start
var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    //     updateCursor: function(e) {
    //         var self = this;

    //         console.log(e)

    //         // Show the cursor
    //         self.cursorVisible = true;
    //         self.toggleCursorVisibility();

    //         // Position the dot
    //         self.endX = e.pageX;
    //         self.endY = e.pageY;
    //         self.$dot.style.top = self.endY + 'px';
    //         self.$dot.style.left = self.endX + 'px';
    //     },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Click events
        document.addEventListener('mousedown', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });


        document.addEventListener('mousemove', function (e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}
cursor.init();
// pointer end
