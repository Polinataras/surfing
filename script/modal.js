const hamburger = document.querySelector('#hamb');

const body = document.body;

hamburger.addEventListener('click', function(e) {
    e.preventDefault();

    body.classList.add('stop-scrolling');

    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');
    body.appendChild(overlayElement);

    const modalTemplate = document.querySelector('#modalTemplate');
    overlayElement.innerHTML = modalTemplate.innerHTML;

    const closeElement = overlayElement.querySelector('.modal-close');
    closeElement.addEventListener('click', function(e) {
        e.preventDefault();
        body.removeChild(overlayElement);
        body.classList.remove('stop-scrolling');
    });
});



