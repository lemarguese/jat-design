window.onload = function () {
    if (window.matchMedia('(max-width: 425px)').matches) {
        location.assign('https://m.jat.test.invision.kz');
    }
    routeHandlers();
    sliderEmployee(0, 2);
    initMap();
    mailModal();
    intervalAnim();
    employeesInfoSlider();
    closeButtonHandler();

    window.addEventListener('scroll', logoDrop);
    window.addEventListener('scroll', routingDropUp);

    let upperScroll = document.getElementsByClassName("upper-icon_block")[0];
    upperScroll.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
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

function closeMailModal() {
    let askModal = document.getElementsByClassName('question-modal')[0];
    let askModalBg = document.getElementsByClassName('question-apply_modal')[0];
    askModal.style.animation = 'closeModal linear .35s';

    setTimeout(() => {
        askModal.style.display = 'none';
        askModalBg.style.display = 'none';
    }, 350);
}

function closeModal() {
    let employeeInfoBg = document.getElementsByClassName('employee-info_modal')[0];
    let employeeInfoModal = document.getElementsByClassName('employee-modal')[0];
    employeeInfoModal.style.animation = 'closeModal linear .35s';

    setTimeout(() => {
        employeeInfoModal.style.display = 'none';
        employeeInfoBg.style.display = 'none';
    }, 350);

    localStorage.removeItem('name');
    localStorage.removeItem('rank');
    localStorage.removeItem('email');
    localStorage.removeItem('telephone');
    localStorage.removeItem('image');
}

function intervalAnim () {
    let index = 2;
    changeSlide(document.getElementsByClassName('pagination--item')[0]);
    setInterval(() => {
        changeSlide(document.getElementsByClassName('pagination--item')[index]);
        index += 2;
        if (index >= 6) index = 0;
    }, 3000);
}

function changeSlide(index) {
    let title = document.getElementsByClassName('values-content--text')[0];
    let content = document.getElementsByClassName('info-text')[0];
    let currentTab = document.getElementsByClassName('current-arrow');
    let values = document.getElementsByClassName('values--section_inner')[0];

    for (const currentTabElement of currentTab) {
        currentTabElement.style.display = 'none';
        currentTabElement.className = 'current-arrow';
    }
    values.style.opacity = '0';

    setTimeout(() => {
        let idx = Number(index.children[0].innerHTML);

        currentTab[idx - 1].style.display = 'block';
        currentTab[idx - 1].className = 'current-arrow active-arrow';
        if (idx === 1) {
            title.innerHTML = 'контроль';
            content.innerHTML = 'Рассчитывайте на нас. Мы<br/> всегда будем рядом, если<br/> что-то пойдет не по плану. ';
        } else if (idx === 2) {
            title.innerHTML = 'Ответственность';
            content.innerHTML = 'Мы несем ответственность за<br/> ваш груз с момента забора<br/> до момента доставки';
        } else if (idx === 3) {
            title.innerHTML = 'надежность';
            content.innerHTML = 'Мы всегда рядом и держим Вас<br/> в курсе на каждом этапе пути. ';
        }
    }, 500);

    setTimeout(() => {
        values.style.opacity = '1';
    }, 500);
}

function changeSlideBackground(event) {
    let activeIdx = document.getElementsByClassName('current-arrow active-arrow')[0];
    let currentTabs = document.getElementsByClassName('current-arrow');
    let paginationItems = document.querySelectorAll('.pagination--item_block');

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
    changeSlide(paginationItems[idx].children[0]);
}

// тнадо прописать если max-width(425) -> m.jat.test.invision.k

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

function sliderEmployee(start, end, animation) {
    let employees = document.querySelectorAll('.employee--item');

    for (let i = 0; i < employees.length; i++) {
        employees[i].style.display = 'none';
        if (i >= start && i <= end) {
            employees[i].style.display = 'flex';
            employees[i].style.animation = animation ? animation : 'rightSlider ease-in-out .5s';
            setTimeout(() => {
                employees[start].style.transform = 'scale(1.1)';
            }, 500);
            setTimeout(() => {
                employees[(start + end) / 2].style.transform = 'scale(1.1)';
            }, 600);
            setTimeout(() => {
                employees[end].style.transform = 'scale(1.1)';
            }, 700);
            setTimeout(() => {
                employees[end].style.transform = 'scale(1)';
            }, 800);
            setTimeout(() => {
                employees[(start + end) / 2].style.transform = 'scale(1)';
            }, 900);
            setTimeout(() => {
                employees[start].style.transform = 'scale(1)';
            }, 1000);
        }
    }
}

function sliderEmployeeHandler(event) {
    let employees = document.querySelectorAll('.employee--item');
    let displayedEmployees = [];
    for (let i = 0; i < employees.length; i++) {
        if (getComputedStyle(employees[i]).display === 'flex') { // 0 2
            displayedEmployees.push(i);
        }
    }

    let prevArrow = document.getElementsByClassName('prev-arrow-icon')[0];
    let nextArrow = document.getElementsByClassName('next-arrow-icon')[0];

    let start;
    let end;
    let animation;

    if (event.className === 'next-arrow-icon') {
        prevArrow.style.display = 'block';
        start = displayedEmployees[0] + 3;
        end = displayedEmployees[2] + 3;
        if (end === 11) {
            event.style.display = 'none';
            end = 11;
        }
        animation = 'rightSlider ease-in-out .5s';
    } else {
        nextArrow.style.display = 'block';
        start = displayedEmployees[0] - 3;
        end = displayedEmployees[2] - 3;
        if (start === 0) {
            event.style.display = 'none';
            start = 0;
            nextArrow.style.display = 'block';
        }
        animation = 'leftSlider ease-in-out .5s';
    }
    sliderEmployee(start, end, animation);
}

function sendInfoEmployee(event) {
    let name = `${event.previousSibling.previousSibling.children[0].innerText}`;
    let rank = `${event.previousSibling.previousSibling.children[1].innerText}`;
    let telephone = `${event.previousSibling.previousSibling.children[2].innerText}`;
    let email = `${event.previousSibling.previousSibling.children[3].innerText}`;
    let image = `${event.previousSibling.previousSibling.previousSibling.previousSibling.children[1].getAttribute('src')}`;
    localStorage.setItem('name', name);
    localStorage.setItem('rank', rank);
    localStorage.setItem('telephone', telephone);
    localStorage.setItem('email', email);
    localStorage.setItem('image', image);
}

function initMap() {
    ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
                center: [43.220899, 76.907511],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'JAT Location',
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../../assets/icons/placemark-icon.png',
                iconImageSize: [50, 62],
                iconImageOffset: [-10, -38]
            });
        myMap.geoObjects
            .add(myPlacemark);
    });
}

function routingDropUp() {
    let upperIcon = document.getElementsByClassName('upper-icon_block')[0];
    let mailIcon = document.getElementsByClassName('mail-icon_block')[0];

    let aboutHR = document.getElementsByClassName('employees--section')[0];
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

function closeButtonHandler () {
    let closeIcon = document.getElementsByClassName("close-icon")[0];
    closeIcon.addEventListener('click', closeModal);
    let closeIconSecond = document.getElementsByClassName("close-icon")[1];
    closeIconSecond.addEventListener('click', closeMailModal);
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

function routeHandlers () {
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let servicesRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    mainRoute.addEventListener("click", function () {
        location.assign('../../index.html');
    });

    hseRoute.addEventListener('click', function () {
        location.assign('../hse/hse.html');
    });

    servicesRoute.addEventListener('click', function () {
        location.assign('../service/service.html');
    });

    hrRoute.addEventListener('click', function () {
        location.assign('../hr/hr.html');
    });

    contactsRoute.addEventListener('click', function () {
        location.assign('../contacts/contacts.html');
    });
}

function employeesInfoSlider () {
    let employeeInfoBg = document.getElementsByClassName('employee-info_modal')[0];
    let employeeInfoModal = document.getElementsByClassName('employee-modal')[0];
    let employeeImage = document.getElementsByClassName('employee-inner')[0];
    let employeeName = document.getElementsByClassName('employee-name_modal--text')[0];
    let employeeRank = document.getElementsByClassName('employee-rank_modal--text')[0];
    let employeeEmail = document.getElementsByClassName('email--text')[0];
    let employeePhone = document.getElementsByClassName('phone--text')[0];

    let employeeButtons = document.getElementsByClassName('employee-more-button');

    for (let i = 0; i < employeeButtons.length; i++) {
        employeeButtons[i].addEventListener('click', function () {
            setTimeout(() => {
                employeeInfoBg.style.display = 'block';
                employeeInfoModal.style.display = 'block';
                let image = localStorage.getItem('image');

                employeeImage.style.backgroundImage = `url("../../assets/icons/lines.svg"), url("../../assets/icons/question-modal-rect.svg"), url("${image}")`;
                employeeName.innerText = localStorage.getItem('name');
                employeeRank.innerText = localStorage.getItem('rank');
                employeeEmail.innerText = localStorage.getItem('email');
                employeePhone.innerText =  localStorage.getItem('telephone');
            }, 350);

            employeeInfoModal.style.animation = 'openModal linear .35s';
        });
    }
}
