// Definer basis-URL til WordPress REST API
const baseUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/posts";

const params = new URLSearchParams(window.location.search); //https://www.w3schools.com/jsref/prop_loc_search.asp
const aktivitetId = params.get("id");


// Funktion til at hente én specifik aktivitet baseret på id'et i URL'en
getAktivitet();

async function getAktivitet() {
    try {
        const response = await fetch(
            `${baseUrl}/${aktivitetId}?acf_format=standard` //tager id fra den aktivitet man har trykket på fra url, og tilføjer til vores api url, sammen med acf_format=standard for at få fat i acf felterne.
        );

        const post = await response.json(); // konverterer json til javascript objekt

        renderAktivitet(post); //kører funktionen til at vise aktivitet på siden

    } catch (error) {
        console.error("Fejl:", error); //viser fejl på skærmen hvis der er problemer med at hente data fra api'et
    }
}


function renderAktivitet(post) {
    const aktivitetContainer = document.querySelector(".aktivitetContainer");

    aktivitetContainer.innerHTML = ""; // Ryd containeren før tilføjelse

    // viser hero billede med alt tekst
    const heroBillede = document.querySelector(".heroBillede img");
    heroBillede.src = post.acf.hero_billede.url;
    heroBillede.alt = `Billede af ${post.acf.overskrift_aktivitet}`;


    // laver pakker HTML - vises kun hvis pakken har en overskrift
    const pakker = [post.acf.pakker, post.acf.pakker_Kopier, post.acf.pakker_Kopier2]
        .filter(pakke => pakke.pakke_overskrift) // fjerner tomme pakker
        .map(pakke => { // laver HTML for hver pakke
            const beskrivelse = pakke.pakke_intro
                ? `<p>${pakke.pakke_intro}</p>`
                : "";

            const pris = pakke.pakke_pris // viser pris kun hvis der er en pris i pakken, ellers vises Gratis
                ? `<h3 class="pakkePris"> ${pakke.pakke_pris} kr</h3>`
                : "Gratis";

            return `<div class="pakke">
            <div class="pakkeHeader">
                <h3>${pakke.pakke_overskrift}</h3>
                ${pris}
            </div>
            ${beskrivelse}
        </div>`;
        }).join(""); // join bruges for at samle alle pakker i én string, så det kan indsættes i HTML'en

    // viser booking knap kun hvis der er et booking link
    const bookingLink = post.acf.booking_link
        ? `<button onclick="window.open('${post.acf.booking_link}', '_blank')">Book ${post.acf.overskrift_aktivitet}</button>`
        : "";

    // viser pakker sektion kun hvis der er pakker, ellers vises ingenting (gratis aktivitet)
    const pakkerSektion = pakker
        ? `<article class="pakkerSektion">
                ${pakker}
                ${bookingLink}
            </article>`
        : "";

    // viser billede kun hvis billede_1 er udfyldt
    const billede = post.acf.billede_slider.billede_1
        ? `<img class="aktivitetBillede" src="${post.acf.billede_slider.billede_1}" alt="Billede fra ${post.acf.overskrift_aktivitet}">`
        : "";

    // tilføjer html til siden og indsætter dynamisk fra wordpress
    aktivitetContainer.innerHTML = `
        <article class="introSektion">
            <h1>${post.acf.overskrift_aktivitet}</h1>
            <p>${post.acf.intro_tekst}</p>
        </article>

        <hr>

        ${pakkerSektion}

        ${billede}

        <img class="aktivitetLokation" src="${post.acf.aktivitet_lokation.url}" alt="Kort over lokation for ${post.acf.overskrift_aktivitet}">
    `;
}