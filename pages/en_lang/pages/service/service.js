window.onload = function () {
    if (window.matchMedia('(max-width: 425px)').matches) {
        location.assign('../../../../mobile/pages/en_lang/pages/service/service.html');
    }
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    intervalSlider(changeSlideBack, 11, 5);
    intervalSlider(changeSlide, 13, 5);
    mailModal();
    telephoneMask();
    changeLanguage();

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
            top: 0, behavior: "smooth"
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

function mailModal() {
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

function routingDropUp() {
    let upperIcon = document.getElementsByClassName('upper-icon_block')[0];
    let mailIcon = document.getElementsByClassName('mail-icon_block')[0];

    let aboutHR = document.getElementsByClassName('about_and_hr')[0];
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
    advWorks.style.animation = 'closing 0.5s linear 0s';
    setTimeout(() => {
        let idx = Number(index.children[0].innerHTML);

        currentTab[idx - 1].style.display = 'block';
        currentTab[idx - 1].className = 'current-arrow-second active-arrow-second';
        if (idx === 1) {
            title.innerHTML = 'Reliability';
            content.innerHTML = 'We are always there. We are always delivering. We are always replying with solutions.';
            image.setAttribute('src', "../../../../assets/icons/service-slider-image-1.png");
        } else if (idx === 2) {
            title.innerHTML = 'Grit';
            content.innerHTML = 'We stay the course and genuinely believe that going the extra mile, getting it done, is ingrained in the JAT DNA.';
            image.setAttribute('src', "../../../../assets/icons/service-slider-2.png");
        } else if (idx === 3) {
            title.innerHTML = 'Personal attitude';
            content.innerHTML = 'We offer dedicated JAT point of contact to handle all your shipping needs in all modes of transport.';
            image.setAttribute('src', "../../../../assets/icons/service-slider-3.png");
        } else if (idx === 4) {
            title.innerHTML = 'Speed of communication';
            content.innerHTML = 'You will immediately notice the communication and responsiveness as you start to contact JAT.';
            image.setAttribute('src', "../../../../assets/icons/service-slider-4.png");
        }
    }, 500);

    setTimeout(() => {
        advWorks.style.animation = 'opening .5s linear 0s';
    }, 500);
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

    if (idx > 3) idx = 3; else if (idx < 0) idx = 0;
    changeSlide(paginationItems[idx].children[0]);
}

function changeSlideBackground(event) {
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

    if (idx > 2) idx = 2; else if (idx < 0) idx = 0;
    changeSlideBack(paginationItems[idx].children[0]);
}

function changeSlideBack(ev) {
    let sliderImage = document.getElementsByClassName('jat-how_we_work')[0];
    let infoHowWeWork = document.getElementsByClassName('how_we_work-info')[0];
    let content = document.querySelector('.how_we_work-content');

    let currentTab = document.getElementsByClassName('current-arrow');
    for (const currentTabElement of currentTab) {
        currentTabElement.style.display = 'none';
        currentTabElement.className = 'current-arrow';
    }

    setTimeout(() => {
        sliderImage.style.background = 'transparent';
        sliderImage.style.transition = 'background linear 1.25s';
    }, 500);
    infoHowWeWork.style.animation = 'closing .5s linear 0s';

    setTimeout(() => {
        let idx = Number(ev.children[0].innerHTML);
        currentTab[idx - 1].style.display = 'block';
        currentTab[idx - 1].className = 'current-arrow active-arrow';

        if (idx === 1) {
            sliderImage.style.background = 'url("../../../../assets/icons/jat-service-employee.png") no-repeat center';
            content.innerHTML = 'We offer one dedicated JAT point of contact to handle all your<br/> shipping needs in all modes of transport. You will not be transferred<br/> to another department and colleagues. You will have one name <br/>and an escalation contact. Your JAT experience will be simplicity<br/> in communication to ‘’getting things done’’.'
            sliderImage.style.backgroundSize = 'cover';
        } else if (idx === 2) {
            sliderImage.style.background = 'url("../../../../assets/icons/employee-service-2.jpg") no-repeat center';
            content.innerHTML = 'The minute we receive your Transport Order, we review the cargo details<br/> and query same with the vendor and work through our internal checklist<br/> to ensure we can start the job before booking with carriers. We update you<br/> as we progress and offer live tracking  either by mail or access to our cloud<br/> based internet tracking in which you can download all your shipping<br/> documents and cargo photos at any time.\n'
            sliderImage.style.backgroundSize = 'cover';
        } else if (idx === 3) {
            sliderImage.style.background = 'url("../../../../assets/icons/employee-service-3.jpg") no-repeat center';
            content.innerHTML = 'While we see you as our customer, we understand you too<br/> have a customer and you need JAT Transport as a reliable<br/> business partner to help  your business succeed with timely<br/> & safe  deliveries, accurate communication all at the agreed<br/> price set out at the start.'
            sliderImage.style.backgroundSize = 'cover';
        }
    }, 500);
    setTimeout(() => {
        infoHowWeWork.style.animation = 'opening 1.5s linear 0s';
    }, 500);
}

function slide(event) {
    let serviceItem = document.getElementsByClassName("service-info--item");
    let titlesItem = document.getElementsByClassName('titles-item');
    let activeTitleItem = document.getElementsByClassName('titles-item active-title')[0];
    let activeServiceItem = document.getElementsByClassName('service-info--item active-service')[0];

    let idx = 0;

    activeServiceItem.style.animation = 'closing 0.5s linear 0s';
    activeTitleItem.className = 'titles-item';
    event.className = 'titles-item active-title';

    setTimeout(() => {

        for (let i = 0; i < titlesItem.length; i++) {
            if (titlesItem[i] === event) idx = i;
        }
        activeServiceItem.className = 'service-info--item';
        serviceItem[idx].className = 'service-info--item active-service';
        activeServiceItem.style.animation = 'opening 0.5s linear 0s';
    }, 500);

}

function slideRight() {
    let items = document.getElementsByClassName('jat-data--item');
    for (const item of items) {
        checkPenetration(item);
    }
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

function intervalSlider(callback, limit, index) {
    setInterval(() => {
        callback(document.querySelectorAll('.pagination--item')[index]);
        index += 2;
        if (limit === index) index = 5;
    }, 3000);
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

function changeLanguage() {
    let langBlock = document.getElementsByClassName('language-selector')[0];

    langBlock.addEventListener('mouseenter', () => {
        langBlock.innerText = 'En';
    });

    langBlock.addEventListener('mouseleave', () => {
        langBlock.innerText = 'Ru';
    });

    langBlock.addEventListener('click', function () {
        location.assign('../../../service/service.html');
    });

    // changing logic on progress
}