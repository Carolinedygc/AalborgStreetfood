renderOpeningHours(); // indsætter åbningstider på siden

// I stedet for at indsætte åbningstiderne direkte i hvert HTML, laver vi en funktion der indsætter det i alle HTML'er på én gang
function renderOpeningHours() {
    const openingHours = document.querySelector(".openingHours");
    openingHours.innerHTML = `
        <article class="whenClosed">
            <p>Åbningstid idag: 11:30 - 00:00</p>
            <p class="clickHere">Se vores åbningstider</p>
        </article>
        <article class="fullOpeninghours">
            <div class="toggle">
                <div class="street">Åbningstider <br> streetfood</div>
                <div class="food">Åbningstider <br> madboder</div>
            </div>
            <div class="forskelligeTidsintervaller">
                <div class="tidsinterval">
                    <div class="pink"></div>
                    <p>11:30-22:00</p>
                </div>
                <div class="tidsinterval">
                    <div class="gul"></div>
                    <p>11:30-23:00</p>
                </div>
                <div class="tidsinterval">
                    <div class="brun"></div>
                    <p>11:30-00:00</p>
                </div>
                <div class="tidsinterval">
                    <div class="grøn"></div>
                    <p>11:30-01:00</p>
                </div>
            </div>
            <div class="kalender">
                <div class="kalenderTop">
                    <h2>2026</h2>
                    <h2>Juni <i class="fa-solid fa-chevron-down"></i></h2>
                </div>
                <div class="kalenderen">
                    <div class="ugedage">
                        <p>Man</p>
                        <p>Tir</p>
                        <p>Ons</p>
                        <p>Tor</p>
                        <p>Fre</p>
                        <p>Lør</p>
                        <p>Søn</p>
                    </div>
                    <hr>
                    <div class="kalenderDage">
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>1</p></div>
                            <div class="kalenderDag pink"><p>2</p></div>
                            <div class="kalenderDag pink"><p>3</p></div>
                            <div class="kalenderDag gul"><p>4</p></div>
                            <div class="kalenderDag brun"><p>5</p></div>
                            <div class="kalenderDag grøn"><p>6</p></div>
                            <div class="kalenderDag pink"><p>7</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>8</p></div>
                            <div class="kalenderDag pink"><p>9</p></div>
                            <div class="kalenderDag pink"><p>10</p></div>
                            <div class="kalenderDag gul"><p>11</p></div>
                            <div class="kalenderDag brun idag"><p>12</p></div>
                            <div class="kalenderDag grøn"><p>13</p></div>
                            <div class="kalenderDag pink"><p>14</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>15</p></div>
                            <div class="kalenderDag pink"><p>16</p></div>
                            <div class="kalenderDag pink"><p>17</p></div>
                            <div class="kalenderDag gul"><p>18</p></div>
                            <div class="kalenderDag brun"><p>19</p></div>
                            <div class="kalenderDag grøn"><p>20</p></div>
                            <div class="kalenderDag pink"><p>21</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>22</p></div>
                            <div class="kalenderDag pink"><p>23</p></div>
                            <div class="kalenderDag pink"><p>24</p></div>
                            <div class="kalenderDag gul"><p>25</p></div>
                            <div class="kalenderDag brun"><p>26</p></div>
                            <div class="kalenderDag grøn"><p>27</p></div>
                            <div class="kalenderDag pink"><p>28</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>29</p></div>
                            <div class="kalenderDag pink"><p>30</p></div>
                            <div class="kalenderDag pinkLight"><p>1</p></div>
                            <div class="kalenderDag gulLight"><p>2</p></div>
                            <div class="kalenderDag brunLight"><p>3</p></div>
                            <div class="kalenderDag grønLight"><p>4</p></div>
                            <div class="kalenderDag pinkLight"><p>5</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article class="fullOpeninghoursFood">
            <div class="toggle">
                <div class="street">Åbningstider <br> streetfood</div>
                <div class="food">Åbningstider <br> madboder</div>
            </div>
            <div class="forskelligeTidsintervaller foods">
                <div class="tidsinterval">
                    <div class="pink"></div>
                    <p>11:30-21:00</p>
                </div>
                <div class="tidsinterval">
                    <div class="gul"></div>
                    <p>11:30-22:00</p>
                </div>
                <div class="tidsinterval gone">
                    <div class="pink"></div>
                    <p>11:30-21:00</p>
                </div>
                <div class="tidsinterval gone">
                    <div class="gul"></div>
                    <p>11:30-22:00</p>
                </div>
            </div>
            <div class="kalender">
                <div class="kalenderTop">
                    <h2>2026</h2>
                    <h2>Juni <i class="fa-solid fa-chevron-down"></i></h2>
                </div>
                <div class="kalenderen">
                    <div class="ugedage">
                        <p>Man</p>
                        <p>Tir</p>
                        <p>Ons</p>
                        <p>Tor</p>
                        <p>Fre</p>
                        <p>Lør</p>
                        <p>Søn</p>
                    </div>
                    <hr>
                    <div class="kalenderDage">
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>1</p></div>
                            <div class="kalenderDag pink"><p>2</p></div>
                            <div class="kalenderDag pink"><p>3</p></div>
                            <div class="kalenderDag pink"><p>4</p></div>
                            <div class="kalenderDag gul"><p>5</p></div>
                            <div class="kalenderDag gul"><p>6</p></div>
                            <div class="kalenderDag pink"><p>7</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>8</p></div>
                            <div class="kalenderDag pink"><p>9</p></div>
                            <div class="kalenderDag pink"><p>10</p></div>
                            <div class="kalenderDag pink"><p>11</p></div>
                            <div class="kalenderDag gul idag"><p>12</p></div>
                            <div class="kalenderDag gul"><p>13</p></div>
                            <div class="kalenderDag pink"><p>14</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>15</p></div>
                            <div class="kalenderDag pink"><p>16</p></div>
                            <div class="kalenderDag pink"><p>17</p></div>
                            <div class="kalenderDag pink"><p>18</p></div>
                            <div class="kalenderDag gul"><p>19</p></div>
                            <div class="kalenderDag gul"><p>20</p></div>
                            <div class="kalenderDag pink"><p>21</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>22</p></div>
                            <div class="kalenderDag pink"><p>23</p></div>
                            <div class="kalenderDag pink"><p>24</p></div>
                            <div class="kalenderDag pink"><p>25</p></div>
                            <div class="kalenderDag gul"><p>26</p></div>
                            <div class="kalenderDag gul"><p>27</p></div>
                            <div class="kalenderDag pink"><p>28</p></div>
                        </div>
                        <div class="uge1">
                            <div class="kalenderDag pink"><p>29</p></div>
                            <div class="kalenderDag pink"><p>30</p></div>
                            <div class="kalenderDag pinkLight"><p>1</p></div>
                            <div class="kalenderDag pinkLight"><p>2</p></div>
                            <div class="kalenderDag gulLight"><p>3</p></div>
                            <div class="kalenderDag gulLight"><p>4</p></div>
                            <div class="kalenderDag pinkLight"><p>5</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `;

    // Event listeners for åbningstiderne
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
}
