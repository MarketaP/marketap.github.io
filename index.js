window.onload = function(){
    var change_language_cz = document.querySelector(".change-language-cz")
    var change_language_en = document.querySelector(".change-language-en")
    var zprava = document.querySelector(".zprava-link")
    var header = document.querySelector(".header")
    var main_content_element = document.querySelector(".main-content")
    var bio_button = document.querySelector(".bio-button")
    var research_button = document.querySelectorAll(".research-button")
    var media_button = document.querySelectorAll(".media-button")
    var cv_button = document.querySelector(".cv-button")

    change_language_cz.addEventListener("click", function(){
        document.body.className = "cz"
    })

    change_language_en.addEventListener("click", function(){
        document.body.className = "en"
    })

    bio_button.addEventListener("click", function(){
        window.scroll(0,0)
        main_content_element.className = "main-content bio"
    })

    // cv_button.addEventListener("click", function(){
    //     main_content_element.className = "main-content cv"
    // })

    for (var i = 0; i < 2; i++){
        research_button[i].addEventListener("click", function(){
            window.scroll(0,0)
            main_content_element.className = "main-content research"
        })
        media_button[i].addEventListener("click", function(){
            window.scroll(0,0)
            main_content_element.className = "main-content media"
        })
    }

    setTimeout(function(){
        zprava.setAttribute("href", ["ma", "il", "to", ":p", "od", "eb", "ra", "ds", "ka", ".m", "ar", "ke", "ta", "@h", "us", "kers", ".u", "nl", ".e", "du"].join(""))
    }, 50)

    window.onscroll = function(){
        var y = window.scrollY
        var transparency1 = Math.min(0.7 + 0.3 * y/300, 1)
        var transparency2 = Math.min(0.5 + 0.5 * y/300, 1)
        var transparency3 = Math.min(0.3 + 0.7 * y/300, 1)
        var background_style = "background: linear-gradient(170deg, rgba(234,244,251," + transparency1 + ") 0%, rgba(236,244,250," + transparency2 + ") 35%, rgba(244,248,251," + transparency3 + ") 100%)"
        header.setAttribute("style", background_style)
    }

    var modal = document.querySelector("#modal")
    var modal_content = document.querySelector("#modal-content")
    var modal_backdrop = document.querySelector("#modal-backdrop")
    var close_modal = document.querySelector("#close-modal")

    modal_backdrop.addEventListener("click", function(){
        modal.className = ""
        modal_content.innerHTML = ""
    })

    window.addEventListener("keypress", function(event){
        if(event.key === "Escape") {
            modal.className = ""
            modal_content.innerHTML = ""
        }
    })

    close_modal.addEventListener("click", function(){
        modal.className = ""
        modal_content.innerHTML = ""
    })

    var grassland_video_button = document.querySelector("#grassland-video-button")
    grassland_video_button.addEventListener("click", function(){
        modal_content.innerHTML = '<iframe title="Forage Production Models and Predictions for Semi-arid Grasslands - Markéta Podebradská" width="640" height="360" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;" frameBorder="0" src="https://app.vidgrid.com/embed/NelbEuNaPXKx"></iframe>'
        modal.className = "open"
    })

    var grassland_podcast_button = document.querySelector("#grassland-podcast-button")
    grassland_podcast_button.addEventListener("click", function(){
        modal_content.innerHTML = '<div style="height: 5.62em; max-width: 56.12rem; overflow: hidden; position:relative; -webkit-box-flex: 1; flex-grow: 1;"><iframe style="height: 100%;" src="https://mediahub.unl.edu/media/15046?format=iframe&autoplay=0" title="Audio Player:  Forage Production Models and Predictions for Semi-arid Grasslands with Markéta Podebradská" allowfullscreen></iframe></div>'
        modal.className = "open"
    })

    var pure_nebraska_video_button = document.querySelector("#pure-nebraska-video-button")
    pure_nebraska_video_button.addEventListener("click", function(){
        modal_content.innerHTML = '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FPureNebraska%2Fvideos%2F1281309128705246%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'
        modal.className = "open"
    })
    
    var SNR_drought_game_video_button = document.querySelector("#SNR-drought-game-video-button")
    SNR_drought_game_video_button.addEventListener("click", function(){
        modal_content.innerHTML = '<iframe src="https://player.vimeo.com/video/503961645" width="640" height="361" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
        modal.className = "open"
    })
}