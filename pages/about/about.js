window.onload = function () {
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let servicesRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    sliderEmployee(0, 3);
    initMap();
    changeSlide(document.getElementsByClassName('pagination--item')[0]);

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

    let employeeInfoBg = document.getElementsByClassName('employee-info_modal')[0];
    let employeeInfoModal = document.getElementsByClassName('employee-modal')[0];
    let employeeImage = document.getElementsByClassName('employee-inner')[0];
    let employeeName = document.getElementsByClassName('employee-name_modal--text')[0];
    let employeeRank = document.getElementsByClassName('employee-rank_modal--text')[0];

    let employeeButtons = document.getElementsByClassName('employee-more-button');

    for (let i = 0; i < employeeButtons.length; i++) {
        employeeButtons[i].addEventListener('click', function () {
            setTimeout(() => {
                employeeInfoBg.style.display = 'block';
                employeeInfoModal.style.display = 'block';

                employeeImage.style.backgroundImage = `url("../../assets/icons/lines.svg"), url("../../assets/icons/question-modal-rect.svg"), url("../../assets/icons/employee-modal-${i}.jpg")`;
                employeeName.innerHTML = localStorage.getItem('name');
                employeeRank.innerHTML = localStorage.getItem('rank');
            }, 350);

            employeeInfoModal.style.animation = 'openModal linear .35s';
        });
    }

    let upperScroll = document.getElementsByClassName("upper-icon_block")[0];
    upperScroll.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    let closeIcon = document.getElementsByClassName("close-icon")[0];
    closeIcon.addEventListener('click', closeModal);
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
    localStorage.removeItem('image');
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

    setTimeout(() => {
        values.style.opacity = '1';
    }, 250);
}


function changeSlideBackground (event) {
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

function sliderEmployee(start, end) {
    let employees = document.querySelectorAll('.employee--item');

    for (let i = 0; i < employees.length; i++) {
        employees[i].style.display = 'none';
        if (i >= start && i < end) {
            employees[i].style.display = 'block';
        }
    }
}

function sliderEmployeeHandler (event) {
    let employees = document.querySelectorAll('.employee--item');
    let displayedEmployees = [];

    let start = displayedEmployees[0] + 1;
    let end = displayedEmployees[displayedEmployees.length - 1] + 1;
    if (event.className === 'next-arrow-icon') {
        sliderEmployee(start, end);
    }
}

function sendInfoEmployee (event) {
    let name = event.previousSibling.previousSibling.children[0].innerText;
    let rank = event.previousSibling.previousSibling.children[1].innerText;

    localStorage.setItem('name', name);
    localStorage.setItem('rank', rank);
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