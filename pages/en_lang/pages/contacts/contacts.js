window.onload = function () {
    if (window.matchMedia('(max-width: 425px)').matches) {
        location.assign('../../../../mobile/pages/en_lang/pages/contacts/contacts.html');
    }
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];

    window.addEventListener('scroll', logoDrop);
    mailModal();
    initMap();
    telephoneMask();
    changeLanguage();
    window.addEventListener('scroll', routingDropUp);

    serviceRoute.addEventListener("click", function () {
        location.assign('../service/service.html');
    });

    hseRoute.addEventListener('click', function () {
        location.assign('../hse/hse.html');
    });

    aboutRoute.addEventListener('click', function () {
        location.assign('../about/about.html');
    });

    hrRoute.addEventListener('click', function () {
        location.assign('../hr/hr.html');
    });

    mainRoute.addEventListener('click', function () {
        location.assign('../../index.html');
    });

    let closeIcon = document.getElementsByClassName("close-icon")[0];
    closeIcon.addEventListener('click', closeMailModal);

    loadAnim();
}

function mailModal() {
    let mail = document.getElementsByClassName('mail-icon_block')[0];
    let mailInner = document.getElementsByClassName('question-modal')[0];
    let modalMail = document.getElementsByClassName('question-apply_modal')[0];
    mail.addEventListener('click', function () {
        modalMail.style.display = 'block';
        mailInner.style.display = 'block';
        mailInner.style.animation = 'openModal linear .2s';
    });
}

function routingDropUp() {
    let mailIcon = document.getElementsByClassName('mail-icon_block')[0];

    let aboutHR = document.getElementsByClassName('jat-body-footer')[0];
    let aboutHRrect = aboutHR.getBoundingClientRect();
    if (window.innerHeight >= aboutHRrect.top) {
        mailIcon.style.animation = 'opening linear .25s';
        setTimeout(() => {
            mailIcon.style.display = 'flex';
        }, 250);
    } else {
        mailIcon.style.animation = 'closing linear .25s';
        setTimeout(() => {
            mailIcon.style.display = 'none';
        }, 250);
    }
}

function initMap() {
    ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
                center: [43.225182, 76.905014],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../../../../assets/icons/placemark-icon.png',
                iconImageSize: [50, 62],
                iconImageOffset: [-35, -50]
            });
        myMap.geoObjects
            .add(myPlacemark);
    });
}

function closeMailModal() {
    let askModal = document.getElementsByClassName('question-modal')[0];
    let askModalBg = document.getElementsByClassName('question-apply_modal')[0];
    askModal.style.animation = 'closeModal linear .35s';

    setTimeout(() => {
        askModal.style.display = 'none';
        askModalBg.style.display = 'none';
    }, 350);
}

function logoDrop() {
    let dropLogo = document.getElementsByClassName('jat-logo-sidebar')[0];
    let rect = document.getElementsByClassName('main-logo')[0].getBoundingClientRect();
    if (rect.top <= 0) {
        setTimeout(() => {
            dropLogo.style.display = 'block';
        }, 250)
        dropLogo.style.animation = 'dropDownLogo linear .5s';
    } else {
        dropLogo.style.animation = 'dropUpLogo linear .5s';
        setTimeout(() => {
            dropLogo.style.display = 'none';
        }, 250);
    }
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

function telephoneMask() {
    let inputTel = document.querySelector('.telephone-input');

    inputTel.addEventListener('input', function () {
        let x = inputTel.value.slice(2).replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        inputTel.value = '+7 ' + x[1] + ' ' + x[2] + ' ' + x[3];
    });
}

function changeLanguage () {
    let langBlock = document.getElementsByClassName('language-selector')[0];

    langBlock.addEventListener('mouseenter', () => {
        langBlock.innerText = 'Ru';
    });

    langBlock.addEventListener('mouseleave', () => {
        langBlock.innerText = 'En';
    });

    langBlock.addEventListener('click', function () {
        location.assign('../../../contacts/contacts.html');
    });

    // changing logic on progress
}