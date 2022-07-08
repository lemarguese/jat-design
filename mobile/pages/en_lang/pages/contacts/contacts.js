$(() => {
    loadAnim();

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

    function closeModal() {
        $('.modalWindow_content-close')[0].addEventListener('click', () => {
            $('.modalWindow').css({
                display: 'none'
            })
        })

        $('.modalWindow_content-button')[0].addEventListener('click', () => {
            $('.modalWindow').css({
                display: 'none'
            })
        })

        $('.mobileContacts_form-button')[0].addEventListener('click', (e) => {
            e.preventDefault();
            $('.modalWindow').css({
                display: 'block'
            })
        })
    }

    function addMask() {
        $('.telephone').mask("+9 (999) 999-9999");
    }

    function changeLang() {
        let langs = $('.lang-text');
        langs[0].addEventListener('click', function () {
            location.assign('../../../contacts/contacts.html');
        });
    }

    changeLang();
    addMask();
    closeModal();
})
