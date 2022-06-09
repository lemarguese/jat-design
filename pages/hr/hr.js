window.onload = function () {
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

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