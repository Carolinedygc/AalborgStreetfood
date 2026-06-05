const baseUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/posts";

const params = new URLSearchParams(window.location.search);
const eventId = params.get("id");

// Funktion til at hente ét specifikt event baseret på id'et i URL'en
getEvent();

async function getEvent() {
    try {
        const response = await fetch(
            `${baseUrl}/${eventId}?acf_format=standard` //tager id fra det event man har trykket på fra url, og tilføjer til vores api url, sammen med acf_format=standard for at få fat i acf felterne.
        );

        const post = await response.json(); // konverterer json til javascript objekt

        renderEvent(post); //kører funktionen til at vise event på siden

    } catch (error) {
        console.error("Fejl:", error); //viser fejl på skærmen hvis der er problemer med at hente data fra api'et
    }
}

function renderEvent(post) {
    const eventContainer = document.querySelector(".eventContainer");

    eventContainer.innerHTML = ""; // Ryd containeren før tilføjelse

    // viser hero billede med alt tekst
    const heroBillede = document.querySelector(".heroBillede img");
    heroBillede.src = post.acf.hero_billede;
    heroBillede.alt = `Billede af ${post.acf.overskrift_event}`;

    // viser sticker kun hvis der er indhold i acf.sticker
    const sticker = post.acf.sticker
        ? `<div class="sticker"><p>${post.acf.sticker}</p></div>`
        : "";

    // viser billet sektion kun hvis der er en billet overskrift
    const billetSektion = post.acf.billetter.billet_overskrift
        ? `<article class="billetSektion">
               
                <div class="billetRække">
                    <h3>Billetter</h3>
                    <h3 class="billetPris">${post.acf.billetter.billet_pris ? `${post.acf.billetter.billet_pris} kr` : "Gratis"}</h3>
                </div>
                ${post.acf.booking_link ? `<button onclick="window.open('${post.acf.booking_link}', '_blank')">${post.acf.billetter.billet_overskrift}</button>` : ""}
            
                </article>`
        : "";

    // viser billede kun hvis billede_1 er udfyldt
    const billede = post.acf.billede_slider.billede_1
        ? `<img class="eventBillede" src="${post.acf.billede_slider.billede_1}" alt="Billede fra ${post.acf.overskrift_event}">`
        : "";

    // viser lokationskort kun hvis aktivitet_lokation er udfyldt
    const lokation = post.acf.aktivitet_lokation
        ? `<img class="eventLokation" src="${post.acf.aktivitet_lokation.url}" alt="Kort over lokation for ${post.acf.overskrift_event}">`
        : "";

    // viser event beskrivelse kun hvis event_beskrivelse er udfyldt
    const beskrivelse = post.acf.event_beskrivelse
        ? `<p>${post.acf.event_beskrivelse}</p>`
        : "";

    // tilføjer html til siden og indsætter dynamisk fra wordpress
    eventContainer.innerHTML = `
        ${sticker}

        <article class="introSektion">
            <h1>${post.acf.overskrift_event}</h1>
            <div class="eventMeta">
                <p><i class="fa-regular fa-clock"></i> ${post.acf.dato_tid}</p>
                <p><i class="fa-solid fa-location-dot"></i> ${post.acf.lokation}</p>
            </div>
            <p>${post.acf.intro_tekst}</p>
            <button>Læs mere</button>
        </article>
<hr>
        ${billetSektion}
<hr>
        <div class="eventBeskrivelse">
            ${beskrivelse}
        </div>

        ${billede}

        ${lokation}
    `;
}