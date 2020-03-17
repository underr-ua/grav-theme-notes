/*!
 * Notes is a Grav CMS theme | https://github.com/underr-ua/grav-theme-notes
 * Copyright 2017 - 2019 Andrii Burkatskyi aka underr
 * Licensed under MIT(https://github.com/underr-ua/grav-theme-notes/raw/master/LICENSE)
*/

// Back-to-top button
(function (window, document) {

    var top_button = document.getElementById('back-to-top');
    var is_pressed = false;

    window.onscroll = function () {
        if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
            if (!is_pressed) top_button.classList.add('show')
        } else {
            top_button.classList.remove('show')
        }
    };

    var step = 0;
    var time = Math.abs(top_button.getAttribute('data-time')) || 10;

    if (top_button.getAttribute('data-icon')) {
        top_button.style.backgroundImage = 'url("' + top_button.getAttribute('data-icon') + '")';
    }

    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        top_button.classList.add('show')
    } else {
        top_button.classList.remove('show')
    }

    top_button.addEventListener('click', function (event) {
        event.preventDefault();

        is_pressed = true;

        var timer_handle = setInterval(function () {
            if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
                step = document.body.scrollTop / 16 || document.documentElement.scrollTop / 16;
                window.scrollBy(0, -step);
                top_button.classList.remove('show');
            } else {
                clearInterval(timer_handle);
                is_pressed = false;
            }
        }, time);

    });

})(this, this.document);


(function (window, document) {

})(this, this.document);
