// Definer basis-URL til WordPress REST API
const baseUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/posts";





// Madboders id er 3
const categoryId = 3;

getAllBoder();


// Henter alle boder 
async function getAllBoder() {

    try {
        const response = await fetch(`${baseUrl}?acf_format=standard&per_page=100&categories=${categoryId}&orderby=title&order=asc`);
        // kilde til at sortere alfabetisk: https://developer.wordpress.org/rest-api/reference/posts/


        const posts = await response.json();

        renderBoder(posts);
    } catch (error) {
        console.error("Fejl ved visning af boder:", error);
    }
}

// Render boderne på siden
function renderBoder(posts) {
    const boderContainer = document.querySelector(".bodCards");
    boderContainer.innerHTML = ""; // Ryd containeren før tilføjelse

    posts.forEach(post => {
        // laver sticker som en variabel
        const sticker = post.acf.land
            ? `<div class="sticker"><p>${post.acf.land}</p></div>` : ""


        boderContainer.innerHTML += `
                        <a href="./specifikBod.html?id=${post.id}" class="bodCard">

                    <img src="${post.acf.herocard_billede}" alt="Billede af mad fra ${post.acf.titel}">
                    ${sticker}
                    <div class="bodCardText">
                        <h2>${post.acf.titel}</h2>
                        <p>${post.acf.intro_tekst}
                        </p>
                        <button>Læs mere</button>
                    </div>
                </a>
        `});
}
