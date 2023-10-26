const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
    const accordionButton = item.querySelector('.accordion-button');

    accordionButton.addEventListener('click', () => {
        item.querySelector('.minus-icon').classList.toggle('active');
        item.querySelector('.plus-icon').classList.toggle('active');

        item.querySelector('.accordion-text').classList.toggle('active');
    });
})
