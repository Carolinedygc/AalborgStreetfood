
const clickHere = document.querySelector('.clickHere');         // knappen der åbner/lukker
const fullOpeningHours = document.querySelector('.fullOpeninghours');       // streetfood-kalender
const fullOpeningHoursFood = document.querySelector('.fullOpeninghoursFood'); // food-kalender


// Når brugeren klikker på "clickHere"-knappen
clickHere.addEventListener('click', () => {

    // har dette element klassen 'active' lige nu?
    // Hvis streetfood ELLER food allerede er åben
    if (
        fullOpeningHours.classList.contains('active') ||
        fullOpeningHoursFood.classList.contains('active')
    ) {
        // fjern klassen 'active', elementet lukker (CSS slår animation fra)
        fullOpeningHours.classList.remove('active');
        fullOpeningHoursFood.classList.remove('active');

    } else {
        // tilføj klassen 'active, elementet åbner (CSS slår animation til)
        fullOpeningHours.classList.add('active'); // åbn streetfood som standard
    }
});


// Skift til Food-visning, ved klik på "Food"-fanen mens streetfood er åben
document.querySelector('.fullOpeninghours .food').addEventListener('click', () => {
    fullOpeningHours.classList.remove('active');   // luk streetfood
    fullOpeningHoursFood.classList.add('active');  // åbn food
});


// Skift til Streetfood-visning, ved klik på "Street"-fanen mens food er åben
document.querySelector('.fullOpeninghoursFood .street').addEventListener('click', () => {
    fullOpeningHoursFood.classList.remove('active'); // luk food
    fullOpeningHours.classList.add('active');         // åbn streetfood
});