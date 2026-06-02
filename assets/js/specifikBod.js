// Definer basis-URL til WordPress REST API
const baseUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/posts";

const params = new URLSearchParams(window.location.search); //https://www.w3schools.com/jsref/prop_loc_search.asp
const bodId = params.get("id");


// Funktion til at hente én specifik opskrift
getBod();

async function getBod() {
    try {
        const response = await fetch(
            `${baseUrl}/${bodId}?acf_format=standard` //tager id fra den opskrift man har trykket på fra url, og tilføjer til vores api url, sammen med acf_format=standard for at få fat i acf felterne.
        );

        const post = await response.json(); // konverterer json til javascript objekt

        renderBod(post); //kører funktionen til at vise bod på siden

    } catch (error) {
        console.error("Fejl:", error); //viser fejl i konsollen
    }
}




function renderBod(post) {
    const bodContainer = document.querySelector(".bodContainer");

    bodContainer.innerHTML = ""; // Ryd containeren før tilføjelse

    // laver en variabel for at gøre det nemmere at arbejde med menukortet i WP,da samlingen indeholder både overskrift og beskrivelse for menukortet, samt alle retterne.
    const samling = post.acf.menukort.menu_samling_1;

    // Find alle retter dynamisk (ret_1, ret_2, ret_3 osv.) og filtrerer dem for at finde de keys der starter med "ret_" 
    const retter = Object.keys(samling)
        .filter(key => key.startsWith("ret_"))
        .map(key => samling[key]);

    // Generer HTML for hver ret, dette gøres for at kunne vise et ubegrænset antal retter på menukortet, da det afhænger af hvor mange retter der er oprettet i WP for den enkelte bod.
    const retterHTML = retter.map(ret => `
        <div class="menuItem">
            <div class="menuItemHeader">
                <div class="menuItemHeader">
                    <h2>${ret.ret_overskrift}</h2>
                    <div class="allergeneIkon">
                        <img src="" alt="" class="allergen">
                        <img src="" alt="" class="allergen">
                        <img src="" alt="" class="allergen">
                    </div>
                </div>
                <h2>${ret.ret_pris} kr</h2>
            </div>
            <p>${ret.ret_beskrivelse}</p>
        </div>
    `).join("");



    // tilføjer html til siden og indsætter dynamisk fra wordpress
    bodContainer.innerHTML += `
        <article class="introSection">
                    <div class="intro">
                        <h1>${post.acf.titel}</h1>
                        <p>${post.acf.intro_tekst}</p>
                    </div>
                    <div class="allergener">
                        <div class="allergen">
                            <img src="" alt="">
                            <p>Vegetarisk</p>
                        </div>
                        <div class="allergen">
                            <img src="" alt="">
                            <p>Indeholder laktose</p>
                        </div>
                        <div class="allergen">
                            <img src="" alt="">
                            <p>Indeholder gluten</p>
                        </div>
                        <div class="allergen">
                            <img src="" alt="">
                            <p>Indeholder nødder</p>
                        </div>
                        <div class="allergen">
                            <img src="" alt="">
                            <p>Indeholder skalddyr</p>
                        </div>
                    </div>
                </article>

        <article class="bodMenu">
            <div class="menuHeader">
                <h2>Menu</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <hr>

            <div class="menuItems">
                <div class="menuSamling">
                    <h2>${samling.samling_overskrift}</h2>
                    <p class="samlingBeskrivelse">${samling.samling_beskrivelse}</p>
                    <p class="samlingPris">${samling.samling_pris} kr</p>
                </div>

                ${retterHTML}
            </div>
        </article>
    `;



    const heroBillede = document.querySelector(".heroBillede");
    heroBillede.innerHTML = ``;
    heroBillede.innerHTML = `<img src="${post.acf.herocard_billede}" alt="Billede af mad fra ${post.acf.titel}">`;
}