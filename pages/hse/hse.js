window.onload = function () {
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let contactsRoute = document.getElementsByClassName("routing-block_item contacts-text")[0];

    serviceRoute.addEventListener("click", function () {
        location.assign('../service/service.html');
    });

    mainRoute.addEventListener('click', function () {
        location.assign('../../index.html');
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
}