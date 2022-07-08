$(() => {
    initMap();
    loadAnim();

    function initMap() {
        ymaps.ready(function () {
            let myMap = new ymaps.Map('map', {
                    center: [43.220899, 76.907511],
                    zoom: 15
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
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
                    top: rect.top + scrollTop,
                    left: rect.left + scrollLeft
                }
            }

            animOnScroll();
        }
    }

    function modalVacancie() {
        const vacannsiesButton = $('.mobileVacancie_btn');
        const sendModalWrapper = $('.sendModal_wrapper')[0];
        const sendModal = $('.sendModal')[0];
        const closeModal = $('.sendModal_close');
        const sendModalBtn = $('.sendModal_button')

        vacannsiesButton.on('click', function (e) {
            sendModal.style.display = 'block';
            sendModalWrapper.style.display = 'block';
            setTimeout(() => {
                sendModalWrapper.style.transform = 'scale(1)'
                sendModalWrapper.style.opacity = '.8';
                sendModal.style.transform = 'scale(1)'
                sendModal.style.opacity = 1;
            }, 300)

        });

        closeModal.on('click', function () {

            sendModalWrapper.style.transform = 'scale(0)'
            sendModalWrapper.style.opacity = '0';
            sendModal.style.transform = 'scale(0)'
            sendModal.style.opacity = 0;
            setTimeout(() => {
                sendModalWrapper.style.display = 'none';
                sendModal.style.display = 'none';
            }, 1000)
        })

        sendModalBtn.on('click', () => {

            sendModal.style.display = 'none';
            $('.modalWindow').css({
                display: 'block',
            })
        })
        $('.modalWindow_content-close').on('click', () => {
            $('.modalWindow')[0].style.display = 'none';
            sendModalWrapper.style.display = 'none';
        })

        $('.modalWindow_content-button').on('click', () => {
            $('.modalWindow')[0].style.display = 'none';
            sendModalWrapper.style.display = 'none';
        })

    }

    function addMask() {
        $('.telephone').mask("+9 (999) 999-9999");
    }

    function changeLang() {
        let langs = $('.lang-text');
        langs[1].addEventListener('click', function () {
            location.assign('../en_lang/pages/hr/hr.html');
        });
    }

    changeLang();
    addMask();
    modalVacancie();


})