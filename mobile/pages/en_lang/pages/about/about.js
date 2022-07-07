$(() => {

    function initMap() {
        ymaps.ready(function () {
            let myMap = new ymaps.Map('map', {
                    center: [43.220899, 76.907511], zoom: 15
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки', balloonContent: 'Это красивая метка'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '../../assets/icons/mark.png',
                    iconImageSize: [30, 42],
                    iconImageOffset: [-5, -38]
                });
            myMap.geoObjects
                .add(myPlacemark);
        });
    }

    function loadAnim() {
        const animItems = document.querySelectorAll('._animation');

        if (animItems.length > 0) {
            window.addEventListener('scroll', animOnScroll);

            function animOnScroll() {
                for (let index = 0; index < animItems.length; index++) {
                    const animItem = animItems[index];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;
                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }
                    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                        animItem.classList.add('_active');
                    } else {
                        animItem.classList.remove('_active');
                    }
                }
            }

            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {
                    top: rect.top + scrollTop, left: rect.left + scrollLeft
                }
            }
            animOnScroll();
        }
    }

    $('.mobileAbout_team-slider').slick({
        slidesToScroll: 3, slidesToShow: 3,
    });

    $('.slides').slick({
        slidesToScroll: 1, slidesToShow: 1, dots: true,
    });
    $('.slides .slick-prev').html('<');
    $('.slides .slick-next').html('>')

    $('.slides .slick-arrow').css({
        background: 'none', backgroundColor: 'white', border: '0px solid black',

    })
    $('.slides .slick-prev').css({
        background: 'none',
        fontSize: '16px',
        backgroundColor: 'white',
        border: '0px solid black',
        width: '28px',
        height: '31px',
        position: 'absolute',
        bottom: '40px',
        left: 'calc(50% - 90px)',
        top: 'inherit'
    })
    $('.slides .slick-next').css({
        background: 'none',
        fontSize: '16px',
        backgroundColor: 'white',
        border: '0px solid black',
        width: '28px',
        height: '31px',
        position: 'absolute',
        bottom: '40px',
        right: 'calc(50% - 90px)',
        top: 'inherit'
    })
    $('.slides .slick-slide').css({
        width: '100%',
    })

    function Personal() {
        $('.close_Personal').on('click', () => {
            $('.djeisonTomas_modal').css({
                display: 'none'
            })
            $('.ulyanaTomas_modal').css({
                display: 'none'
            })
            $('.artem_modal').css({
                display: 'none'
            })
            $('.aiym_modal').css({
                display: 'none'
            })

            $('.ainilya_modal').css({
                display: 'none'
            })

            $('.anar_modal').css({
                display: 'none'
            })

            $('.marjan_modal').css({
                display: 'none'
            })

            $('.yuliya_modal').css({
                display: 'none'
            })

            $('.gulvira_modal').css({
                display: 'none'
            })

            $('.akjan_modal').css({
                display: 'none'
            })

            $('.aijan_modal').css({
                display: 'none'
            })

            $('.daniel_modal').css({
                display: 'none'
            })


            $('.backdrop').css({
                display: 'none'
            })
        })
        $('.backdrop').on('click', () => {
            $('.djeisonTomas_modal').css({
                display: 'none'
            })
            $('.ulyanaTomas_modal').css({
                display: 'none'
            })
            $('.artem_modal').css({
                display: 'none'
            })
            $('.aiym_modal').css({
                display: 'none'
            })

            $('.ainilya_modal').css({
                display: 'none'
            })

            $('.anar_modal').css({
                display: 'none'
            })

            $('.marjan_modal').css({
                display: 'none'
            })

            $('.yuliya_modal').css({
                display: 'none'
            })

            $('.gulvira_modal').css({
                display: 'none'
            })

            $('.akjan_modal').css({
                display: 'none'
            })

            $('.aijan_modal').css({
                display: 'none'
            })

            $('.daniel_modal').css({
                display: 'none'
            })


            $('.backdrop').css({
                display: 'none'
            })
        })
        $('.djeison').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.djeisonTomas_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.djeisonTomas_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })


        $('.ulyana').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.ulyanaTomas_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.ulyanaTomas_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })
        $('.artem').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.artem_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.artem_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.aiym').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.aiym_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.aiym_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.ainilya').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.ainilya_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.ainilya_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.anar').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.anar_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.anar_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.marjan').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.marjan_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.marjan_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.yuliya').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.yuliya_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.yuliya_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.gulvira').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.gulvira_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.gulvira_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.akjan').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.akjan_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.akjan_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.aijan').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.aijan_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.aijan_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })

        $('.daniel').on('click', function () {
            $('.backdrop').css({
                display: 'block',
            })
            $('.daniel_modal').css({
                display: 'block'
            })
            setTimeout(() => {
                $('.daniel_modal').css({
                    opacity: '1', transform: 'scale(1)'
                })
            }, 300)
        })


    }


    Personal();
    initMap();
    loadAnim();
    // slider();
})