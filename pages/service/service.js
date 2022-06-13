window.onload = function () {
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    changeSlide(document.getElementsByClassName('pagination--item')[0]);
    changeSlideBack(document.getElementsByClassName('pagination--item')[0]);
    mailModal();

    window.addEventListener('scroll', routingDropUp);
    window.addEventListener('scroll', logoDrop);

    mainRoute.addEventListener("click", function () {
        location.assign('../../index.html');
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

    contactsRoute.addEventListener('click', function () {
        location.assign('../contacts/contacts.html');
    });

    window.addEventListener('scroll', slideRight);

    let feedbackModalBg = document.getElementsByClassName("feedback-modal_block")[0];
    let feedbackModal = document.getElementsByClassName("feedback-modal")[0];
    let advantageForm = document.getElementsByClassName("advantages-info_inner")[0];

    advantageForm.addEventListener('submit', function () {
        event.preventDefault();
        setTimeout(() => {
            feedbackModal.style.display = 'block';
            feedbackModalBg.style.display = 'block';
        }, 350);
        feedbackModal.style.animation = 'openModal linear .35s';
    });

    let closeIcon = document.getElementsByClassName("close-icon")[1];
    let closeIconSecond = document.getElementsByClassName("close-icon")[0];
    let closeBtn = document.getElementsByClassName('modal-btn')[0];

    closeIcon.addEventListener('click', closeModal);
    closeIconSecond.addEventListener('click', closeMailModal);
    closeBtn.addEventListener('click', closeModal);

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
    let feedbackModalBg = document.getElementsByClassName("feedback-modal_block")[0];
    let feedbackModal = document.getElementsByClassName("feedback-modal")[0];

    feedbackModal.style.animation = 'closeModal linear .35s';
    setTimeout(() => {
        feedbackModal.style.display = 'none';
        feedbackModalBg.style.display = 'none';
    }, 350);
}

function mailModal () {
    let modalInner = document.getElementsByClassName('question-modal')[0];
    let mail = document.getElementsByClassName('mail-icon_block')[0];
    let modalMail = document.getElementsByClassName('question-apply_modal')[0];
    mail.addEventListener('click', function () {
        modalInner.style.animation = 'openModal linear .2s';
        setTimeout(() => {
            modalInner.style.display = 'block';
            modalMail.style.display = 'block';
        }, 200);
    });
}

function routingDropUp () {
    let upperIcon = document.getElementsByClassName('upper-icon_block')[0];
    let mailIcon = document.getElementsByClassName('mail-icon_block')[0];

    let aboutHR = document.getElementsByClassName('about_and_hr')[0];
    let aboutHRrect = aboutHR.getBoundingClientRect();
    if (window.innerHeight >= aboutHRrect.top) {
        upperIcon.style.animation = 'opening linear .25s';
        mailIcon.style.animation = 'opening linear .25s';
        setTimeout(() => {
            upperIcon.style.display = 'flex';
            mailIcon.style.display = 'flex';
        }, 250);
    } else {
        upperIcon.style.animation = 'closing linear .25s';
        mailIcon.style.animation = 'closing linear .25s';
        setTimeout(() => {
            upperIcon.style.display = 'none';
            mailIcon.style.display = 'none';
        }, 250);
    }
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

function changeSlide(index) {
    let title = document.getElementsByClassName('advantage-title-text')[0];
    let content = document.getElementsByClassName('advantage-content-text')[0];
    let advWorks = document.getElementsByClassName('advantages-work--item')[0];
    let image = document.querySelectorAll('.advantages-image_block img')[0];
    let currentTab = document.getElementsByClassName('current-arrow-second');
    for (const currentTabElement of currentTab) {
        currentTabElement.style.display = 'none';
        currentTabElement.className = 'current-arrow-second';
    }

    let measurementItems = document.getElementsByClassName('measurement--item');

    for (let i = 0; i < measurementItems.length; i++) {
        measurementItems[i].style.backgroundSize = '50px';
        if (window.matchMedia('(max-width: 1439px)').matches) {
            measurementItems[i].style.backgroundSize = '35px';
        }
        measurementItems[i].style.transition = 'background-size linear .25s';
    }

    setTimeout(() => {
        advWorks.style.animation = 'closing linear .25';
    }, 250);
    let idx = Number(index.children[0].innerHTML);

    currentTab[idx - 1].style.display = 'block';
    currentTab[idx - 1].className = 'current-arrow-second active-arrow-second';
    if (idx === 1) {
        title.innerHTML = 'надежность';
        content.innerHTML = 'Мы всегда рядом. Мы всегда доставляем грузы. Мы всегда находим решения.';
        image.setAttribute('src', "../../assets/icons/service-slider-image-1.png");
        measurementItems[3].style.backgroundSize = '80px';
        if (window.matchMedia('(max-width: 1439px)').matches) {
            measurementItems[3].style.backgroundSize = '50px';
        }
        measurementItems[3].style.transition = 'background-size linear .25s';
    } else if (idx === 2) {
        title.innerHTML = 'твердость характера';
        content.innerHTML = 'Мы придерживаемся выбранного курса и искренне верим, любое преодоление, заложено в «ДНК компании «JAT».';

        image.setAttribute('src', "../../assets/icons/service-slider-2.png");
        measurementItems[2].style.backgroundSize = '80px';
        if (window.matchMedia('(max-width: 1439px)').matches) {
            measurementItems[2].style.backgroundSize = '50px';
        }
        measurementItems[2].style.transition = 'background-size linear .25s';
    } else if (idx === 3) {
        title.innerHTML = 'ориентация на клиента';
        content.innerHTML = 'За вами будет закреплен одно контактное лицо для решения вопросов на более высоком уровне.';

        image.setAttribute('src', "../../assets/icons/service-slider-3.png");
        measurementItems[0].style.backgroundSize = '80px';
        if (window.matchMedia('(max-width: 1439px)').matches) {
            measurementItems[0].style.backgroundSize = '50px';
        }
        measurementItems[0].style.transition = 'background-size linear .25s';
    } else if (idx === 4) {
        title.innerHTML = 'скорость коммуникации';
        content.innerHTML = 'Сразу же отметите коммуникацию и отзывчивость, как только Вы обратитесь в компанию «JAT».';

        image.setAttribute('src', "../../assets/icons/service-slider-4.png");
        measurementItems[1].style.backgroundSize = '80px';
        if (window.matchMedia('(max-width: 1439px)').matches) {
            measurementItems[1].style.backgroundSize = '50px';
        }
        measurementItems[1].style.transition = 'background-size linear .25s';
    }
    advWorks.style.animation = 'opening linear .25s';
}

function changeSlideArrows(event) {
    let activeIdx = document.getElementsByClassName('current-arrow-second active-arrow-second')[0];
    let currentTabs = document.getElementsByClassName('current-arrow-second');
    let paginationItems = document.querySelectorAll('.pagination_block-second .pagination--item_block');

    let idx = 0;
    for (let i = 0; i < currentTabs.length; i++) {
        if (currentTabs[i] === activeIdx) idx = i;
    }

    if (event.className === 'next-arrow') {
        idx++;
    } else {
        idx--;
    }

    if (idx > 3) idx = 3;
    else if (idx < 0) idx = 0;
    changeSlide(paginationItems[idx].children[0]);
}

function changeSlideBackground (event) {
    let activeIdx = document.getElementsByClassName('current-arrow active-arrow')[0];
    let currentTabs = document.getElementsByClassName('current-arrow');
    let paginationItems = document.querySelectorAll('.pagination_block .pagination--item_block');

    let idx = 0;
    for (let i = 0; i < currentTabs.length; i++) {
        if (currentTabs[i] === activeIdx) idx = i;
    }

    if (event.className === 'next-arrow') {
        idx++;
    } else {
        idx--;
    }

    if (idx > 2) idx = 2;
    else if (idx < 0) idx = 0;
    changeSlideBack(paginationItems[idx].children[0]);
}

function changeSlideBack (ev) {
    let sliderImage = document.getElementsByClassName('jat-how_we_work')[0];

    let currentTab = document.getElementsByClassName('current-arrow');
    for (const currentTabElement of currentTab) {
        currentTabElement.style.display = 'none';
        currentTabElement.className = 'current-arrow';
    }

    setTimeout(() => {
        sliderImage.style.animation = 'closing linear .25';
    }, 250);

    let idx = Number(ev.children[0].innerHTML);
    currentTab[idx - 1].style.display = 'block';
    currentTab[idx - 1].className = 'current-arrow active-arrow';

    if (idx === 1) {
        sliderImage.style.background = 'url("../../assets/icons/jat-service-employee.png") no-repeat center';
        sliderImage.style.backgroundSize = 'cover';
    } else if (idx === 2) {
        sliderImage.style.background = 'url("../../assets/icons/employee-service-2.jpg") no-repeat center';
        sliderImage.style.backgroundSize = 'cover';
    } else if (idx === 3) {
        sliderImage.style.background = 'url("../../assets/icons/employee-service-3.jpg") no-repeat center';
        sliderImage.style.backgroundSize = 'cover';
    }

    sliderImage.style.animation = 'opening linear .25s';
}

function slide (event) {
    let serviceItem = document.getElementsByClassName("service-info--item");
    let titlesItem = document.getElementsByClassName('titles-item');

    let activeTitleItem = document.getElementsByClassName('titles-item active-title')[0];
    let activeServiceItem = document.getElementsByClassName('service-info--item active-service')[0];

    let idx = 0;

    for (let i = 0; i < titlesItem.length; i++) {
        if (titlesItem[i] === event) idx = i;
    }

    activeTitleItem.className = 'titles-item';
    event.className = 'titles-item active-title';

    activeServiceItem.className = 'service-info--item';
    serviceItem[idx].className = 'service-info--item active-service';

}

function slideRight() {
    let items = document.getElementsByClassName('jat-data--item');
    for (const item of items) {
        checkPenetration(item);
    }
}

function logoDrop () {
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

function checkPenetration(rect) {
    let top = rect.getBoundingClientRect().top;
    if (window.innerHeight >= top) {
        rect.style.animation = 'slideRight linear 1s';
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
