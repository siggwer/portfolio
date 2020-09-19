import('jquery');

/**
 * Function to animated submit button
 */
$(document).ready(
    function () {
        $('.frame').on(
            'click', function () {
                $paragrapheTitleText = $('p.paragrapheTitle');
                $paragrapheTopText = $('p.paragrapheTop');

                $paragrapheTitleText.is(':visible');    
                $('p.paragrapheTitle').hide('p.paragrapheTitle');

                $('.top').addClass('open');

                $paragrapheTopText.is(':hidden');
                $('.top').show('p.paragrapheTop');

                $('.message').addClass('pull');
            }
        )

    }
);