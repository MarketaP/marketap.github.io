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
        main_content_element.className = "main-content bio"
    })

    // cv_button.addEventListener("click", function(){
    //     main_content_element.className = "main-content cv"
    // })

    for (var i = 0; i < 2; i++){
        research_button[i].addEventListener("click", function(){
            main_content_element.className = "main-content research"
        })
        // media_button[i].addEventListener("click", function(){
        //     main_content_element.className = "main-content media"
        // })
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
}