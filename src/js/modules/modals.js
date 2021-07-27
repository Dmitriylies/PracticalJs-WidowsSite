const modals = () => {
    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

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
                    if  (i.classList.contains('permit')) {
                        if (e.target) {
                            e.preventDefault();
                        }
                        windows.forEach(item => {
                            item.classList.remove('show');
                        });
                        openModal(modal);  
                    }  else if ( !e.target.classList.contains('popup_calc_button') && !e.target.classList.contains('popup_calc_profile_button')){
                        if (e.target) {
                            e.preventDefault();
                        }
                        windows.forEach(item => {
                            item.classList.remove('show');
                        });
                        openModal(modal); 
                    }
                });
        });
        close.addEventListener('click', ()=> {
            windows.forEach(item => {
                item.classList.remove('show');
            });
            closeModal();
        });
        modal.addEventListener('click', (e) => {
            if ( e.target == modal &&  closeClickOverlay) {
                windows.forEach(item => {
                    item.classList.remove('show');
                });
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
    bindModal('.popup_calc_btn', '.popup_calc', ' .popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', ' .popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', ' .popup_calc_end_close', false);
    // showModalByTime( '.popup',60000);
};

export default modals;