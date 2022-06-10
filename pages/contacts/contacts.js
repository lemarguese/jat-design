window.onload = function () {
    let serviceRoute = document.getElementsByClassName("routing-block_item service-text")[0];
    let hseRoute = document.getElementsByClassName("routing-block_item hse-text")[0];
    let aboutRoute = document.getElementsByClassName("routing-block_item about-text")[0];
    let hrRoute = document.getElementsByClassName("routing-block_item hr-text")[0];
    let mainRoute = document.getElementsByClassName("routing-block_item main-text")[0];

    serviceRoute.addEventListener("click", function () {
        location.assign('../service/service.html');
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

    mainRoute.addEventListener('click', function () {
        location.assign('../../index.html');
    });

    loadAnim();
}

