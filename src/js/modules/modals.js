const modals = () => {
    function bindModal (triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
        const openModal = (selector) => {
            selector.classList.add('show');
            //document.body.style.owerflow = "hiiden";
            document.body.classList.add('modal-open');
        };
        const closeModal = () => {
            modal.classList.remove('show');
            //document.body.style.owerflow = "";
            document.body.classList.remove('modal-open');
        };
        trigger.forEach(i => {
            i.addEventListener('click', (e)=> {
                if (e.target) {
                    e.preventDefault();
                }
                openModal(modal);
            });
        });
        close.addEventListener('click', ()=> {
            closeModal();
        });
        modal.addEventListener('click', (e) => {
            if ( e.target == modal) {
                closeModal();
            }
        });
        document.addEventListener('keypress', (e) => {
            if ( e.code == 'Escape' ) {
                closeModal();
            }
        });
    }
    function showModalByTime(selector,time) {
        setTimeout(function() {
            document.querySelector(selector).classList.add('show');
            //document.body.style.owerflow = "hiiden";
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime( '.popup',60000);
};

export default modals;