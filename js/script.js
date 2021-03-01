(function ($) {
  const $WIN = $(window);
  const cfg = {
    scrollDuration: 800, // smoothscroll duration
    mailChimpURL: "", // mailchimp url
  };
  const hello = function () {
    const detectIndex = document.getElementsByClassName("active");
    console.log(detectIndex[0].outerText);
    if (detectIndex[0].outerText === "HOME") {
      const item = document.getElementById("hello");
      if (item.id === "hello") {
        item.addEventListener("mouseover", function (event) {
          event.target.style.color = "white";
          item.innerText = "Hello..";
        });
        item.addEventListener("mouseout", function (event) {
          event.target.style.color = "#2bb2ff";
          item.innerText = "Hello.";
        });
      }
    }
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

  const ssJumpWeb = function () {
    $("#jumpWeb").on("click", function (e) {
      const retVal = confirm("Do you want to visit my favorite web ?");
      if (retVal == true) {
        return true;
      } else {
        return false;
      }
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
    ssJumpWeb();
    hello();
  })();
})(jQuery);
