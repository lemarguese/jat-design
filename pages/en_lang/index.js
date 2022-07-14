window.onload = function () {
    if (window.matchMedia('(max-width: 425px)').matches) {
        location.assign('../../mobile/pages/en_lang/index.html');
    }
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-route")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    let index = 2;
    // changeSlide(document.getElementsByClassName('pagination--item')[0]);
    // setInterval(() => {
    //     changeSlide(document.getElementsByClassName('pagination--item')[index]);
    //     index += 2;
    //     if (index >= 10) index = 0;
    // }, 3000);

    mailModal();
    telephoneMask();
    changeLanguage();

    window.addEventListener('scroll', routingDropUp);
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
    window.addEventListener('scroll', logoDrop);
    $('.slides').slick({
        dots: true,
        autoplay: true, speed: 1000, autoPlaySpeed: 3000
    });
    $('.slick-prev').html('<');
    $('.slick-next').html('>')
}

function mailModal() {
    let modalMailInner = document.getElementsByClassName('question-modal')[0];
    let mail = document.getElementsByClassName('mail-icon_block')[0];
    let modalMail = document.getElementsByClassName('question-apply_modal')[0];
    mail.addEventListener('click', function () {
        modalMail.style.display = 'block';
        modalMailInner.style.display = 'block';
        modalMailInner.style.animation = 'openModal linear .2s';
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
        location.assign('../../index.html');
    });
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

// function changeSlide(index) {
//     let title = document.getElementsByClassName('advantage-text second-text')[0];
//     let content = document.getElementsByClassName('advantage-content')[0];
//     let advWorks = document.getElementsByClassName('advantages-work--item')[0];
//     let currentTab = document.getElementsByClassName('current-arrow');

//     for (const currentTabElement of currentTab) {
//         currentTabElement.style.display = 'none';
//         currentTabElement.className = 'current-arrow';
//     }
//     advWorks.style.animation = 'closing 0.5s linear 0s';
//     setTimeout(() => {
//         let idx = Number(index.children[0].innerHTML);

//         currentTab[idx - 1].style.display = 'block';
//         currentTab[idx - 1].className = 'current-arrow active-arrow';
//         if (idx === 1) {
//             title.innerHTML = 'Competitive prices';
//             content.innerHTML = 'to meet best possible routings<br/> and deadlines for Requested<br/> on site dates';

//             advWorks.style.backgroundImage = 'url("../../assets/icons/title-back.svg"), url("../../assets/icons/first-slider-main.png")';
//             advWorks.style.backgroundSize = '250px, 200px';
//             advWorks.style.backgroundPosition = 'center 5px, center 75px';
//         } else if (idx === 2) {
//             title.innerHTML = 'Highly engaged<br/> workforce';
//             content.innerHTML = 'out of hours response';

//             advWorks.style.backgroundImage = 'url("../../assets/icons/title-back.svg"), url("../../assets/icons/second-slider-main.png")';
//             advWorks.style.backgroundSize = '250px, 200px';
//             advWorks.style.backgroundPosition = 'center 5px, center 85px';
//         } else if (idx === 3) {
//             title.innerHTML = 'High level<br/> communication<br/> and reporting';
//             content.innerHTML = '';

//             advWorks.style.backgroundImage = 'url("../../assets/icons/title-back.svg"), url("../../assets/icons/third-slider-main.png")';
//             advWorks.style.backgroundSize = '250px, 250px';
//             advWorks.style.backgroundPosition = 'center 5px, center 50px';

//         } else if (idx === 4) {
//             title.innerHTML = 'Owners work<br/> in the business 24/7';
//             content.innerHTML = '';

//             advWorks.style.backgroundImage = 'url("../../assets/icons/title-back.svg"), url("../../assets/icons/plane-jat.png")';
//             advWorks.style.backgroundSize = '250px, 375px';
//             advWorks.style.backgroundPosition = 'center 5px, center center';
//         } else if (idx === 5) {
//             title.innerHTML = 'Ability to provide clarity';
//             content.innerHTML = 'to legislations within transportation<br/> ensuring both supplier and customer<br/> are protected';

//             advWorks.style.backgroundImage = 'url("../../assets/icons/title-back.svg"), url("../../assets/icons/fifth-slider-main.png")';
//             advWorks.style.backgroundSize = '250px, 250px';
//             advWorks.style.backgroundPosition = 'center 5px, center 100px';
//         } else if (idx === 6) {
//             title.innerHTML = 'Transparent claims ';
//             content.innerHTML = 'handling process and management<br/> of Insurance companies';

//             advWorks.style.backgroundImage = 'url("../../assets/icons/title-back.svg"), url("../../assets/icons/last-slider-main.png")';
//             advWorks.style.backgroundSize = '250px, 225px';
//             advWorks.style.backgroundPosition = 'center 5px, center 70px';
//         }
//     }, 500);
//     setTimeout(() => {
//         advWorks.style.animation = 'opening .5s linear 0s';
//     }, 500);
// }

// function changeSlideArrows(event) {
//     let activeIdx = document.getElementsByClassName('current-arrow active-arrow')[0];
//     let currentTabs = document.getElementsByClassName('current-arrow');
//     let paginationItems = document.getElementsByClassName('pagination--item_block');

//     let idx = 0;
//     for (let i = 0; i < currentTabs.length; i++) {
//         if (currentTabs[i] === activeIdx) idx = i;
//     }

//     if (event.className === 'next-arrow') {
//         idx++;
//     } else {
//         idx--;
//     }

//     if (idx > 5) idx = 5;
//     else if (idx < 0) idx = 0;
//     changeSlide(paginationItems[idx].children[0]);
// }

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
