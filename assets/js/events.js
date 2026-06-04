const baseUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/posts";
const categoryId = 22;

getAllEvents();

async function getAllEvents() {
    try {
        const response = await fetch(
            `${baseUrl}?acf_format=standard&per_page=100&categories=${categoryId}&orderby=title&order=asc`
        );

        const posts = await response.json();
        renderEvents(posts);

    } catch (error) {
        console.error("Fejl ved visning af events:", error);
    }
}

function renderEvents(posts) {
    const eventContainer = document.querySelector(".eventsCards");
    eventContainer.innerHTML = "";

    posts.forEach(post => {
        const sticker = post.acf.billet_pris
            ? `<div class="sticker"><p>${post.acf.billet_pris}</p></div>`
            : "";

        eventContainer.insertAdjacentHTML("beforeend", `
            <a href="./specifikEvent.html?id=${post.id}" class="eventCard">
                <img src="${post.acf.hero_billede}" alt="Billede af event">
                ${sticker}
                <div class="eventCardText">
                    <h2>${post.acf.overskrift_event}</h2>
                    <p>${post.acf.dato_tid}</p>
                    <p>${post.acf.intro_tekst}</p>
                    <button>Læs mere</button>
                </div>
            </a>
        `);
    });
}