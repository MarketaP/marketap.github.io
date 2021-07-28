window.onload = function () {
  var sections = ["bio", "research", "media"];
  var current_language = "en";
  var current_section = "bio";
  var change_language_cz = document.querySelector(".change-language-cz");
  var change_language_en = document.querySelector(".change-language-en");
  var zprava = document.querySelector(".zprava-link");
  var header = document.querySelector(".header");
  var main_content_element = document.querySelector(".main-content");
  var bio_button = document.querySelector(".bio-button");
  var research_button = document.querySelectorAll(".research-button");
  var media_button = document.querySelectorAll(".media-button");
  var cv_button = document.querySelector(".cv-button");

  function set_window_hash() {
    window.location.hash = current_section + "-" + current_language;
    document.body.className = current_language;
    if (sections.indexOf(current_section) > -1) {
      main_content_element.className = "main-content " + current_section;
    }
  }

  function setup_page() {
    var initial_section_id = (window.location.hash || "").substr(1).split("-");
    current_section = initial_section_id[0] || "bio";
    current_language = initial_section_id[1] || "en";
    set_window_hash();
  }

  function setup_buttons() {
    change_language_cz.addEventListener("click", function () {
      current_language = "cz";
      set_window_hash();
    });

    change_language_en.addEventListener("click", function () {
      current_language = "en";
      set_window_hash();
    });

    bio_button.addEventListener("click", function () {
      window.scroll(0, 0);
      current_section = "bio";
      set_window_hash();
    });

    // cv_button.addEventListener("click", function(){
    //     main_content_element.className = "main-content cv"
    // })

    for (var i = 0; i < 2; i++) {
      research_button[i].addEventListener("click", function () {
        window.scroll(0, 0);
        current_section = "research";
        set_window_hash();
      });

      media_button[i].addEventListener("click", function () {
        window.scroll(0, 0);
        current_section = "media";
        set_window_hash();
      });
    }
  }

  function setup_modal() {
    var modal = document.querySelector("#modal");
    var modal_content = document.querySelector("#modal-content");
    var modal_backdrop = document.querySelector("#modal-backdrop");
    var close_modal_button = document.querySelector("#close-modal");
    var grassland_video_button = document.querySelector(
      "#grassland-video-button"
    );
    var grassland_podcast_button = document.querySelector(
      "#grassland-podcast-button"
    );
    var pure_nebraska_video_button = document.querySelector(
      "#pure-nebraska-video-button"
    );
    var SNR_drought_game_video_button = document.querySelector(
      "#SNR-drought-game-video-button"
    );

    function close_modal() {
      modal.className = "";
      modal_content.innerHTML = "";
    }

    function open_modal(content) {
      modal_content.innerHTML = content;
      modal.className = "open";
    }

    modal_backdrop.addEventListener("click", close_modal);
    close_modal_button.addEventListener("click", close_modal);
    window.addEventListener("keypress", function (event) {
      if (event.key === "Escape") {
        close_modal();
      }
    });

    grassland_video_button.addEventListener("click", function () {
      open_modal(
        '<iframe title="Forage Production Models and Predictions for Semi-arid Grasslands - Markéta Podebradská" width="640" height="360" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;" frameBorder="0" src="https://app.vidgrid.com/embed/NelbEuNaPXKx"></iframe>'
      );
    });

    grassland_podcast_button.addEventListener("click", function () {
      open_modal(
        '<div style="height: 6em; max-width: 56.12rem; overflow: hidden; position:relative; -webkit-box-flex: 1; flex-grow: 1;"><iframe style="height: 100%;" src="https://mediahub.unl.edu/media/15046?format=iframe&autoplay=0" title="Audio Player:  Forage Production Models and Predictions for Semi-arid Grasslands with Markéta Podebradská" allowfullscreen></iframe></div>'
      );
    });

    pure_nebraska_video_button.addEventListener("click", function () {
      open_modal(
        '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FPureNebraska%2Fvideos%2F1281309128705246%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'
      );
    });

    SNR_drought_game_video_button.addEventListener("click", function () {
      open_modal(
        '<iframe src="https://player.vimeo.com/video/503961645" width="640" height="361" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
      );
    });
  }

  function setup_email_link() {
    setTimeout(function () {
      zprava.setAttribute(
        "href",
        [
          "ma",
          "il",
          "to",
          ":p",
          "od",
          "eb",
          "ra",
          "ds",
          "ka",
          ".m",
          "ar",
          "ke",
          "ta",
          "@h",
          "us",
          "kers",
          ".u",
          "nl",
          ".e",
          "du",
        ].join("")
      );
    }, 50);
  }

  function setup_window_scroll() {
    window.onscroll = function () {
      var y = window.scrollY;
      var transparency1 = Math.min(0.7 + (0.3 * y) / 300, 1);
      var transparency2 = Math.min(0.5 + (0.5 * y) / 300, 1);
      var transparency3 = Math.min(0.3 + (0.7 * y) / 300, 1);
      var background_style =
        "background: linear-gradient(170deg, rgba(234,244,251," +
        transparency1 +
        ") 0%, rgba(236,244,250," +
        transparency2 +
        ") 35%, rgba(244,248,251," +
        transparency3 +
        ") 100%)";
      header.setAttribute("style", background_style);
    };
  }

  setup_page();
  setup_buttons();
  setup_modal();
  setup_email_link();
  setup_window_scroll();
};
