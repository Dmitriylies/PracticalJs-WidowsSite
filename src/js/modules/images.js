const images = () => {
    const worksParent = document.querySelector('.works');
    const imgPopup = document.createElement('div');
    const imgContainer = document.createElement('div');
    const bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    worksParent.append(imgPopup);


    imgPopup.classList.add('works_popup');

    imgPopup.append(bigImg);
    bigImg.classList.add('works_popup-content');

    worksParent.addEventListener('click', (e)=> {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);

            let height = bigImg.offsetHeight;
            bigImg.style.width = `${height}px`;
        }

        if (target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            bigImg.setAttribute('src', '');
        }
    });

};

export default images;