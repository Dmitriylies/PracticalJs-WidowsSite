const checkNumInputs = (selector, triggerSelector) => {
    const numInputs = document.querySelectorAll(selector);
    const trigger = document.querySelector(triggerSelector);

    numInputs.forEach(item => {
        trigger.addEventListener('click', ()=> {
            if (item.value == '') {
                item.style.border = ' 1px solid red';
            }
        });
        item.addEventListener('input', ()=> {
            for(let j = 0; j < numInputs.length; j++) {
                if (numInputs[j].value === '') {
                    trigger.classList.remove('permit');
                } else {
                    numInputs[j].style.border = 'none';
                    trigger.classList.add('permit');
                }
            }
        });    
    });
};

const checkNum = (selector) => {
    const numInput = document.querySelectorAll(selector);

    numInput.forEach(item => {
        item.addEventListener('input', ()=> {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;
export {checkNum};