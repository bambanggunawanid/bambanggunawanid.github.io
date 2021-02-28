(function ($) {
  const $WIN = $(window);
  const cfg = {
    scrollDuration: 800, // smoothscroll duration
    mailChimpURL: "", // mailchimp url
  };
  const hello = function () {
    const item = document.getElementById("hello");
    item.addEventListener("mouseover", function (event) {
      event.target.style.color = "white";
      item.innerText = "Hello..";
    });
    item.addEventListener("mouseout", function (event) {
      event.target.style.color = "#2bb2ff";
      item.innerText = "Hello.";
    });
  };

  const ssPreloader = function () {
    $("html").addClass("ss-preload");

    $WIN.on("load", function () {
      $("html, body").animate({ scrollTop: 0 }, "normal");

      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(400).fadeOut("slow");
      });

      // for hero content animations
      $("html").removeClass("ss-preload");
      $("html").addClass("ss-loaded");
    });
  };

  const ssSmoothScroll = function () {
    $(".smoothscroll").on("click", function (e) {
      const target = this.hash;
      const $target = $(target);

      e.preventDefault();
      e.stopPropagation();

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          cfg.scrollDuration,
          "swing"
        )
        .promise()
        .done(function () {
          window.location.hash = target;
        });
    });
  };
  /* initialize
   * ------------------------------------------------------ */
  (function ssInit() {
    console.log(window.innerWidth);
    if (window.innerWidth < 1200) {
      $(".screenNotSupport").css("visibility", "visible");
      $("body").css("overflow", "hidden");
    }
    ssPreloader();
    ssSmoothScroll();
    hello();
  })();
})(jQuery);
