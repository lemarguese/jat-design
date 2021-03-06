window.onload = function () {
    if (window.matchMedia('(max-width: 425px)').matches) {
        location.assign('../../../../mobile/pages/en_lang/pages/hr/hr.html');
    }
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];
    initMap();
    mailModal();
    telephoneMask();
    changeLanguage();
    window.addEventListener('scroll', logoDrop);

    window.addEventListener('scroll', routingDropUp);

    mainRoute.addEventListener("click", function () {
        location.assign('../../index.html');
    });

    hseRoute.addEventListener('click', function () {
        location.assign('../hse/hse.html');
    });

    aboutRoute.addEventListener('click', function () {
        location.assign('../about/about.html');
    });

    serviceRoute.addEventListener('click', function () {
        location.assign('../service/service.html');
    });

    contactsRoute.addEventListener('click', function () {
        location.assign('../contacts/contacts.html');
    });

    let vacancyBtnOpen = document.getElementsByClassName("vacancy-btn");
    let vacancyModalBg = document.getElementsByClassName('vacancy-apply_modal')[0];
    let vacancyModal = document.getElementsByClassName('vacancy-modal')[0];

    for (let i = 0; i < vacancyBtnOpen.length; i++) {
        vacancyBtnOpen[i].addEventListener('click', function () {
            setTimeout(() => {
                vacancyModalBg.style.display = 'block';
                vacancyModal.style.display = 'block';
            }, 350);

            vacancyModal.style.animation = 'openModal linear .35s';
        });
    }

    let closeIcon = document.getElementsByClassName("close-icon")[0];
    closeIcon.addEventListener('click', closeModal);

    let closeIconSecond = document.getElementsByClassName("close-icon")[1];
    closeIconSecond.addEventListener('click', closeMailModal);

    let hrForm = document.getElementsByClassName("modal-content")[0];

    hrForm.addEventListener('submit', function () {
        event.preventDefault();
        if (this.checkValidity()) {
            setTimeout(() => {
                vacancyModal.style.display = 'none';
                vacancyModalBg.style.display = 'none';
            }, 350);
            vacancyModal.style.animation = 'closeModal linear .35s';
        }
    });

    let upperScroll = document.getElementsByClassName("upper-icon_block")[0];
    upperScroll.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    loadAnim();
}

function routingDropUp() {
    let upperIcon = document.getElementsByClassName('upper-icon_block')[0];
    let mailIcon = document.getElementsByClassName('mail-icon_block')[0];

    let aboutHR = document.getElementsByClassName('jat-body-footer')[0];
    let aboutHRrect = aboutHR.getBoundingClientRect();
    if (window.innerHeight >= aboutHRrect.top) {
        upperIcon.style.animation = 'openingRoutingIcons linear 1s';
        mailIcon.style.animation = 'openingRoutingIcons linear 1s';
        setTimeout(() => {
            upperIcon.style.display = 'flex';
            mailIcon.style.display = 'flex';
        }, 500);
    } else {
        upperIcon.style.animation = 'closingRoutingIcons linear 1s';
        mailIcon.style.animation = 'closingRoutingIcons linear 1s';
        setTimeout(() => {
            upperIcon.style.display = 'none';
            mailIcon.style.display = 'none';
        }, 500);
    }
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

function closeModal() {
    let vacancyModalBg = document.getElementsByClassName('vacancy-apply_modal')[0];
    let vacancyModal = document.getElementsByClassName('vacancy-modal')[0];
    vacancyModal.style.animation = 'closeModal linear .35s';

    setTimeout(() => {
        vacancyModal.style.display = 'none';
        vacancyModalBg.style.display = 'none';
    }, 350);
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

function initMap() {
    ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
                center: [43.225182, 76.905014],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: '?????????????????????? ???????????? ??????????',
                balloonContent: '?????? ???????????????? ??????????'
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
    let inputTel = document.querySelectorAll('.telephone-input');

    for (const inputTelElement of inputTel) {
        inputTelElement.addEventListener('input', function () {
            let x = inputTelElement.value.slice(2).replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            inputTelElement.value = '+7 ' + x[1] + ' ' + x[2] + ' ' + x[3];
        });
    }
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
        location.assign('../../../hr/hr.html');
    });

    // changing logic on progress
}