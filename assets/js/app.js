// Åbningstider
const clickHere = document.querySelector('.clickHere');
const fullOpeningHours = document.querySelector('.fullOpeninghours');
const fullOpeningHoursFood = document.querySelector('.fullOpeninghoursFood');
const openingHours = document.querySelector('.openingHours');

// Åbn/luk panel
clickHere.addEventListener('click', () => {

    // Hvis en af kalendrene er åben -> luk alt
    if (
        fullOpeningHours.classList.contains('active') ||
        fullOpeningHoursFood.classList.contains('active')
    ) {

        fullOpeningHours.classList.remove('active');
        fullOpeningHoursFood.classList.remove('active');
        openingHours.classList.remove('expanded');

    } else {

        // Åbn Streetfood som standard
        fullOpeningHours.classList.add('active');
        fullOpeningHoursFood.classList.remove('active');
        openingHours.classList.add('expanded');

    }
});

// Street -> Food
document
    .querySelector('.fullOpeninghours .food')
    .addEventListener('click', () => {

        fullOpeningHours.classList.remove('active');
        fullOpeningHoursFood.classList.add('active');

    });

// Food -> Street
document
    .querySelector('.fullOpeninghoursFood .street')
    .addEventListener('click', () => {

        fullOpeningHoursFood.classList.remove('active');
        fullOpeningHours.classList.add('active');

    });

// Street -> Street
document
    .querySelector('.fullOpeninghours .street')
    .addEventListener('click', () => {

        fullOpeningHours.classList.add('active');
        fullOpeningHoursFood.classList.remove('active');

    });

// Food -> Food
document
    .querySelector('.fullOpeninghoursFood .food')
    .addEventListener('click', () => {

        fullOpeningHoursFood.classList.add('active');
        fullOpeningHours.classList.remove('active');

    });