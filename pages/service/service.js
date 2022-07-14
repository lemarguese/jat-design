window.onload = function () {
    if (window.matchMedia('(max-width: 425px)').matches) {
        location.assign('../../mobile/pages/service/service.html');
    }
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    // intervalSlider(changeSlideBack, 11, 5);
    // intervalSlider(changeSlide, 13, 5);
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
            top: 0,
            behavior: "smooth"
        });
    });
    loadAnim();

    $('.slides').slick({
        slidesToScroll: 1, slidesToShow: 1, dots: true, autoplay: true, speed: 1000, autoPlaySpeed: 3000
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
        height: '100%',
    })
    
    $('.slides_big').slick({
        slidesToScroll: 1, slidesToShow: 1, dots: true, 
        infinite: true,
        speed: 1000,
        arrows: true, 
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.slides_big .slick-prev').html('<');
    $('.slides_big .slick-next').html('>');

    $('.slides_big .slick-track').css({
        minHeight: '600px',
        width: '100%',
        
    })
    $('.slides_big .slick-arrow').css({
        background: 'none', backgroundColor: 'white', border: '0px solid black',
    })
    $('.slides_big .slick-prev').css({
        background: 'none',
        fontSize: '16px',
        backgroundColor: 'white',
        border: '0px solid black',
        width: '28px',
        height: '31px',
        position: 'absolute',
        bottom: '40px',
        left: '100px',
        top: 'inherit',
        zIndex: 2,
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        borderLeft: '2px solid black',
    })
    $('.slides_big .slick-next').css({
        background: 'none',
        fontSize: '16px',
        backgroundColor: 'white',
        border: '0px solid black',
        width: '28px',
        height: '31px',
        position: 'absolute',
        bottom: '40px',
        left: '212px',
        top: 'inherit',
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        borderRight: '2px solid black',
    })
    $('.slides_big .slick-slide').css({
        width: '100%',
        margin: '0 0',
        
    })
    $('.slides_big.slick-slider').css({
        
        margin: '0 0',
        padding: '0 0',
    })

    $('.slides_big .slick-dots').css({
        bottom: '40px',
        left: '128px',
        height: '31px',
        position: 'absolute',
        margin: '0 0',
        padding: '0 0',
        
    })
    $('.slides_big .slick-dots>li>button').css({
        height: '31px',
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
    })

    $('.slides_big .slick-prev').html('<');
    $('.slides_big .slick-next').html('>')
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
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
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
    }, 10000);
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
        langBlock.innerText = 'En';
    });

    langBlock.addEventListener('mouseleave', () => {
        langBlock.innerText = 'Ru';
    });

    langBlock.addEventListener('click', function () {
        location.assign('../en_lang/pages/service/service.html');
    });
}