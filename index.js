window.onload = function () {
    let hseRoute = document.getElementsByClassName("jat-routing_text hse")[0];
    let hrRoute = document.getElementsByClassName("jat-routing_text hr")[0];
    let serviceRoute = document.getElementsByClassName("jat-routing_text service")[0];
    let contactRoute = document.getElementsByClassName("jat-routing_text contacts")[0];
    let aboutRoute = document.getElementsByClassName("jat-routing_text about")[0];

    hseRoute.addEventListener('click', function () {
        window.location.assign("pages/hse/hse.html");
    });

    hrRoute.addEventListener('click', function () {
        window.location.assign("pages/hr/hr.html");
    });

    serviceRoute.addEventListener("click", function () {
        window.location.assign("pages/service/service.html");
    });

    contactRoute.addEventListener("click", function () {
        window.location.assign("pages/contact/contact.html");
    });

    aboutRoute.addEventListener("click", function () {
        window.location.assign("pages/about/about.html");
    })

    /* btns */

    let serviceButton = document.getElementsByClassName("jat-main_btn service-btn")[0];
    let aboutButton = document.getElementsByClassName("jat-main_btn about-btn")[0];
    let vacancyButton = document.getElementsByClassName("jat-main_btn employment-vacancies-btn")[0];

    serviceButton.addEventListener('click', function () {
        window.location.assign('pages/service/service.html');
    });

    aboutButton.addEventListener('click', function () {
        window.location.assign('pages/about/about.html');
    });

    vacancyButton.addEventListener('click', function () {
        window.location.assign('pages/hr/hr.html');
    })
}