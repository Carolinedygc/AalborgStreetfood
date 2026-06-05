const baseUrl = "https://test.lerkehallund.dk/wp-json/wp/v2/posts";
const categoryId = 22;

getEvent();

async function getEvent() {
    try {
        const response = await fetch(
            `${baseUrl}?acf_format=standard&per_page=100&categories=${categoryId}&orderby=title&order=asc`
        );

        const posts = await response.json();
        renderEvent(posts);

    } catch (error) {
        console.error("Fejl ved visning af event:", error);
    }
}
