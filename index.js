window.onload = function () {
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-route")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    changeSlide(document.getElementsByClassName('pagination--item')[0]);

    serviceRoute.addEventListener("click", function () {
        location.assign('pages/service/service.html');
    });

    hseRoute.addEventListener('click', function () {
        location.assign('pages/hse/hse.html');
    });

    aboutRoute.addEventListener('click', function () {
        location.assign('pages/about/about.html');
    });

    hrRoute.addEventListener('click', function () {
        location.assign('pages/hr/hr.html');
    });

    contactsRoute.addEventListener('click', function () {
        location.assign('pages/contacts/contacts.html');
    });

    window.addEventListener('scroll', fadeAnim);
    window.addEventListener('scroll', fadeAnimSecond);

    let questionModal = document.getElementsByClassName('advantages-button')[0];
    let askModal = document.getElementsByClassName('question-modal')[0];
    let askModalBg = document.getElementsByClassName('question-apply_modal')[0];

    questionModal.addEventListener('click', function () {
        setTimeout(() => {
            askModalBg.style.display = 'block';
            askModal.style.display = 'block';
        }, 350);

        askModal.style.animation = 'openModal linear .35s';
    });

    let closeIcon = document.getElementsByClassName("close-icon")[0];

    closeIcon.addEventListener('click', closeModal);
    let questionForm = document.getElementsByClassName("modal-content")[0];

    questionForm.addEventListener('submit', function () {
        event.preventDefault();
        if (this.checkValidity()) {
            setTimeout(() => {
                askModal.style.display = 'none';
                askModalBg.style.display = 'none';
            }, 350);
            askModal.style.animation = 'closeModal linear .35s';
        }
    });

    let upperScroll = document.getElementsByClassName("upper-icon_block")[0];
    upperScroll.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    let suggestionBtn = document.getElementsByClassName('suggestion-button');
    for (let i = 0; i < suggestionBtn.length; i++) {
        suggestionBtn[i].addEventListener('click', function () {
            location.assign('pages/service/service.html');
        });
    }

    let hrButton = document.getElementsByClassName('hr-button');
    for (let i = 0; i < hrButton.length; i++) {
        hrButton[i].addEventListener('click', function () {
            location.assign('pages/hr/hr.html');
        });
    }
    loadAnim();
}

function closeModal() {
    let askModal = document.getElementsByClassName('question-modal')[0];
    let askModalBg = document.getElementsByClassName('question-apply_modal')[0];
    askModal.style.animation = 'closeModal linear .35s';

    setTimeout(() => {
        askModal.style.display = 'none';
        askModalBg.style.display = 'none';
    }, 350);
}

function changeSlide(index) {
    let title = document.getElementsByClassName('advantage-text second-text')[0];
    let content = document.getElementsByClassName('advantage-content')[0];
    let advWorks = document.getElementsByClassName('advantages-work--item')[0];
    let currentTab = document.getElementsByClassName('current-arrow');

    let measurementItems = document.getElementsByClassName('measurement--item');

    for (let i = 0; i < measurementItems.length - 1; i++) {
        measurementItems[i].style.backgroundSize = '50px';
        measurementItems[i].style.transition = 'background-size linear .25s';
    }

    measurementItems[3].style.backgroundSize = '50px';
    measurementItems[3].style.transition = 'background-size linear .25s';

    for (const currentTabElement of currentTab) {
        currentTabElement.style.display = 'none';
    }
    setTimeout(() => {
        advWorks.style.animation = 'closing linear .25';
    }, 250);
    let idx = Number(index.children[0].innerHTML);

    currentTab[idx - 1].style.display = 'block';
    if (idx === 1) {
        title.innerHTML = 'Конкурентоспособные<br/> цены';
        content.innerHTML = 'обеспечат лучшие возможные маршруты<br/> для соблюдения предельных сроков<br/> доставки на места';

        advWorks.style.backgroundImage = 'url("assets/icons/title-back.svg"), url("assets/icons/first-slider-main.png")';
        advWorks.style.backgroundSize = '250px, 200px';
        advWorks.style.backgroundPosition = 'center 5px, center 75px';
        measurementItems[0].style.backgroundSize = '60px';
        measurementItems[0].style.transition = 'background-size linear .25s';
    } else if (idx === 2) {
        title.innerHTML = 'Исполненный<br/> энтузиазма персонал';
        content.innerHTML = 'даст ответы на вопросы даже<br/> в нерабочее время';

        advWorks.style.backgroundImage = 'url("assets/icons/title-back.svg"), url("assets/icons/second-slider-main.png")';
        advWorks.style.backgroundSize = '250px, 200px';
        advWorks.style.backgroundPosition = 'center 5px, center 85px';
    } else if (idx === 3) {
        title.innerHTML = 'высокий уровень<br/> взаимодействия<br/> и отчётность';
        content.innerHTML = '';

        advWorks.style.backgroundImage = 'url("assets/icons/title-back.svg"), url("assets/icons/third-slider-main.png")';
        advWorks.style.backgroundSize = '250px, 250px';
        advWorks.style.backgroundPosition = 'center 5px, center 50px';
        measurementItems[2].style.backgroundSize = '60px';
        measurementItems[2].style.transition = 'background-size linear .25s';
    } else if (idx === 4) {
        title.innerHTML = 'Владельцы компании<br/> принимают участие<br/> в работе 24/7 ';
        content.innerHTML = '';

        advWorks.style.backgroundImage = 'url("assets/icons/title-back.svg"), url("assets/icons/plane-jat.png")';
        advWorks.style.backgroundSize = '250px, 375px';
        advWorks.style.backgroundPosition = 'center 5px, center 10px';
        measurementItems[3].style.backgroundSize = '80px';
        measurementItems[3].style.transition = 'background-size linear .25s';
    } else if (idx === 5) {
        title.innerHTML = 'прозрачность';
        content.innerHTML = 'в области законодательства во время<br/> транспортировки, которая гарантирует<br/> защиту поставщика и клиента';

        advWorks.style.backgroundImage = 'url("assets/icons/title-back.svg"), url("assets/icons/fifth-slider-main.png")';
        advWorks.style.backgroundSize = '250px, 250px';
        advWorks.style.backgroundPosition = 'center 5px, center 100px';
    } else if (idx === 6) {
        title.innerHTML = 'работа с претензиями';
        content.innerHTML = 'Прозрачный процесс урегулирования<br/> претензий и управление страховыми<br/> компаниями';

        advWorks.style.backgroundImage = 'url("assets/icons/title-back.svg"), url("assets/icons/last-slider-main.png")';
        advWorks.style.backgroundSize = '250px, 225px';
        advWorks.style.backgroundPosition = 'center 5px, center 70px';
        measurementItems[1].style.backgroundSize = '60px';
        measurementItems[1].style.transition = 'background-size linear .25s';
    }
    advWorks.style.animation = 'opening linear .25s';
}

function fadeAnim() {
    let title = document.getElementsByClassName('suggestion_title')[0];
    let content = document.getElementsByClassName('suggestion_content')[0];
    let button = document.getElementsByClassName('suggestion-button')[0];

    const rect = document.getElementsByClassName('jat-suggestion')[0].getBoundingClientRect();
    checkPenetration(rect, title, content, button);
}

function fadeAnimSecond() {
    let title = document.getElementsByClassName('suggestion_title-second')[0];
    let content = document.getElementsByClassName('suggestion_content second-suggestion--text')[0];
    let button = document.getElementsByClassName('suggestion-button')[1];

    const rect = document.getElementsByClassName('jat-suggestion_second')[0].getBoundingClientRect();
    checkPenetration(rect, title, content, button);
}

function checkPenetration(rect, title, content, button) {
    if (window.innerHeight >= rect.top) {
        title.style.animation = 'openingFade linear 1s';
        content.style.animation = 'openingFade linear 1s';
        button.style.animation = 'openingFade linear 1s';
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
