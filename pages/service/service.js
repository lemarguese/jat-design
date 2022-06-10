window.onload = function () {
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    changeSlide(document.getElementsByClassName('pagination--item')[0]);
    changeSlideBack(document.getElementsByClassName('pagination--item')[0]);

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

    let closeIcon = document.getElementsByClassName("close-icon")[0];
    let closeBtn = document.getElementsByClassName('modal-btn')[0];

    closeIcon.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    let upperScroll = document.getElementsByClassName("upper-icon_block")[0];
    upperScroll.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
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

    for (let i = 0; i < measurementItems.length - 1; i++) {
        measurementItems[i].style.backgroundSize = '50px';
        measurementItems[i].style.transition = 'background-size linear .25s';
    }

    measurementItems[3].style.backgroundSize = '70px';
    measurementItems[3].style.transition = 'background-size linear .25s';

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
        measurementItems[3].style.transition = 'background-size linear .25s';
    } else if (idx === 2) {
        title.innerHTML = 'твердость характера';
        content.innerHTML = 'Мы придерживаемся выбранного курса и искренне верим, любое преодоление, заложено в «ДНК компании «JAT».';

        image.setAttribute('src', "../../assets/icons/service-slider-2.png");
        measurementItems[2].style.backgroundSize = '80px';
        measurementItems[2].style.transition = 'background-size linear .25s';
    } else if (idx === 3) {
        title.innerHTML = 'ориентация на клиента';
        content.innerHTML = 'За вами будет закреплен одно контактное лицо для решения вопросов на более высоком уровне.';

        image.setAttribute('src', "../../assets/icons/service-slider-3.png");
        measurementItems[1].style.backgroundSize = '80px';
        measurementItems[1].style.transition = 'background-size linear .25s';
    } else if (idx === 4) {
        title.innerHTML = 'скорость коммуникации';
        content.innerHTML = 'Сразу же отметите коммуникацию и отзывчивость, как только Вы обратитесь в компанию «JAT».';

        image.setAttribute('src', "../../assets/icons/service-slider-4.png");
        measurementItems[0].style.backgroundSize = '80px';
        measurementItems[0].style.transition = 'background-size linear .25s';
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

function checkPenetration(rect) {
    let top = rect.getBoundingClientRect().top;
    if (window.innerHeight >= top) {
        rect.style.animation = 'slideRight linear 1s';
    }
}