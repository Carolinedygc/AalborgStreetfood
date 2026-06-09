const baseUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/posts";
const kategorierUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/event_category";
const categoryId = 22;

// Henter kategorier og events når siden loader
getKategorier();
getAllEvents();

// Henter alle event kategorier og viser dem i filter dropdown
async function getKategorier() {
    try {
        const response = await fetch(kategorierUrl);
        const kategorier = await response.json();
        renderKategorier(kategorier);
    } catch (error) {
        console.error("Fejl ved hentning af kategorier:", error);
    }
}

// Render kategorier som checkboxes i filter dropdown
function renderKategorier(kategorier) {
    const filterListe = document.querySelector(".filterListe");
    filterListe.innerHTML = ""; // Ryd containeren før tilføjelse

    kategorier.forEach(kategori => {
        filterListe.innerHTML += `
            <label class="filterKategori">
                <input type="checkbox" value="${kategori.id}" class="filterCheckbox">
                ${kategori.name}
            </label>
        `;
    });

    // lytter på checkboxes og henter events igen når filter ændres
    document.querySelectorAll(".filterCheckbox").forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const valgteKategorier = Array.from(document.querySelectorAll(".filterCheckbox:checked"))
                .map(cb => cb.value); // finder alle checkede checkboxes og henter deres værdier

            getAllEvents(valgteKategorier); // henter events med de valgte kategorier
        });
    });
}

// toggle filter dropdown
function toggleFilter() {
    const dropdown = document.querySelector(".filterDropdown");
    const pil = document.querySelector(".filterKnap i");
    const erSkjult = dropdown.style.display === "none"; // tjekker om dropdown er skjult
    dropdown.style.display = erSkjult ? "block" : "none"; // viser eller skjuler dropdown
    pil.classList.toggle("roteret"); // roterer pilen
}

// Henter alle events - filtrerer efter valgte kategorier hvis der er nogen
async function getAllEvents(valgteKategorier = []) {
    try {
        // tilføjer event_category filter til url hvis der er valgte kategorier
        const filterParam = valgteKategorier.length > 0
            ? `&event_category=${valgteKategorier.join(",")}`
            : "";

        const response = await fetch(
            `${baseUrl}?acf_format=standard&per_page=100&categories=${categoryId}&orderby=date&order=asc${filterParam}`
        );

        const posts = await response.json();
        renderEvents(posts);

    } catch (error) {
        console.error("Fejl ved visning af events:", error);
    }
}

// Render events på siden
function renderEvents(posts) {
    const eventContainer = document.querySelector(".eventsCards");
    eventContainer.innerHTML = "";

    posts.forEach(post => {
        const sticker = post.acf.billet_pris
            ? `<div class="sticker"><p>${post.acf.billet_pris}</p></div>`
            : "";

        eventContainer.innerHTML += `
            <a href="./specifikEvent.html?id=${post.id}" class="eventCard">
                <img src="${post.acf.hero_billede}" alt="Billede af event" loading="lazy">
                ${sticker}
                <div class="eventCardText">
                    <h2>${post.acf.overskrift_event}</h2>
                    <p>${post.acf.dato_tid}</p>
                    <p>${post.acf.intro_tekst}</p>
                    <button>Læs mere</button>
                </div>
            </a>
        `;
    });
}
