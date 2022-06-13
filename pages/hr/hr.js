window.onload = function () {
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];
    initMap();
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

function closeModal() {
    let vacancyModalBg = document.getElementsByClassName('vacancy-apply_modal')[0];
    let vacancyModal = document.getElementsByClassName('vacancy-modal')[0];
    vacancyModal.style.animation = 'closeModal linear .35s';

    setTimeout(() => {
        vacancyModal.style.display = 'none';
        vacancyModalBg.style.display = 'none';
    }, 350);
}

function initMap () {
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
                iconImageHref: 'images/myIcon.gif',
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
            let animItemPoint = window.innerHeight - animItemHeight/animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
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