const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const apiUrl = `https://ophim1.com/v1/api/phim/${slug}`;

async function loadMovieDetails() {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        displayMovieDetails(data);
    } catch (error) {
        console.log("Lỗi khi tải thông tin phim:", error);
    }
}

function displayMovieDetails(data) {
    console.log(data);
    const movie = data.data.item;
    console.log(movie);
    
    const container = document.querySelector("#container");
    container.innerHTML = `
        <h2>Đang phát: ${movie.episodes[0].server_data[0].filename}</h2>
        <div id="player-section"></div>
    `;

    const playerSection = document.querySelector("#player-section");
    playerSection.innerHTML = `
        <iframe src="${movie.episodes[0].server_data[0].link_embed}" allowfullscreen frameborder="0"></iframe>
    `;
}
document.addEventListener("DOMContentLoaded", async () => {
    await loadMovieDetails();
});
