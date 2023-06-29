$(document).ready(
    function(){
        // $('.header__burger').click(
        //     function (event) {
        //         $('div.header__burger').toggleClass('header__burger_close');
        //         $('nav.header__menu').toggleClass('header__menu_phone');
        //     }
        // );

        $('.menu__name').click(
            function (event) {
                subMenu = event.target.nextElementSibling; // Под.меню
                if(subMenu) {
                    $(subMenu).toggleClass('open');
                }

                // Закрываем все подменю
                $(subMenu).removeClass('novisible');
                $(subMenu).find('.sub-sub-menu').removeClass('open');
            }
        )

        $('.sub-menu__name').click(
            function (event) {
                subMenu = event.target.nextElementSibling; // Под.меню
                if(subMenu) {
                    $(subMenu).toggleClass('open');
                }
                menu = event.target.parentNode.parentNode;
                $(menu).toggleClass('novisible');
            }
        )
    }
);

