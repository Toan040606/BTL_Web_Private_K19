const params = new URLSearchParams(window.location.search);
const slug = params.get("name");
let slugEpisode = params.get("episode");
const apiUrl = `https://ophim1.com/v1/api/phim/${slug}`;

async function loadMovieDetails() {
    const res = await fetch(apiUrl);
    const data = await res.json();
    autoFixNullEpisode(data);
    displayMovieDetails(data);
    displayMovieInfo(data);
}

function displayMovieDetails(data) {
    console.log(data);
    const movie = data.data.item;
    console.log(movie);

    if (slugEpisode === "full") {
        slugEpisode = 1;
        const playerSection = document.querySelector(".watch");
        playerSection.innerHTML = `
            <iframe src="${movie.episodes[0].server_data[slugEpisode - 1].link_embed}" allowfullscreen frameborder="0"></iframe>
        `;

        const episodeListContainer = document.querySelector(".episode-list");
        episodeListContainer.innerHTML = movie.episodes[0].server_data.map((episode) => `
            <div class="episode-item" style="background-color: var(--nav-color);">
                <img src="https://img.ophim.live/uploads/movies/${movie.poster_url}" alt="${movie.name}">
                <a href="${episode.link_embed}" target="_blank">${movie.name} - ${episode.name}</a>
            </div>
        `).join("");
    } else {
        const playerSection = document.querySelector(".watch");
        playerSection.innerHTML = `
            <iframe src="${movie.episodes[0].server_data[slugEpisode - 1].link_embed}" allowfullscreen frameborder="0"></iframe>
        `;

        const episodeListContainer = document.querySelector(".episode-list");
        episodeListContainer.innerHTML = movie.episodes[0].server_data.map((episode, index) => `
            <div class="episode-item">
                <img src="https://img.ophim.live/uploads/movies/${movie.poster_url}" alt="${movie.name}">
                <a href="${episode.link_embed}" target="_blank">${movie.name} - Tập ${index + 1}</a>
            </div>
        `).join("");

        const episodeItem = document.querySelectorAll(`.episode-item`);
        if (episodeItem[slugEpisode - 1]) {
            episodeItem[slugEpisode - 1].style.backgroundColor = "#333";
        }
    }
}

function displayMovieInfo(data) {
    const movie = data.data.item;
    let movieName = movie.name;
    let orgName = movie.origin_name;
    let country = movie.country.map(c => c.name).join(" | ");
    let content = movie.content;
    let year = movie.year;
    let quality = movie.quality;
    let episodeCount = `${movie.episodes[0].server_data.length}/${movie.episode_total}`;
    let otherInfo = `${quality} | ${year} | ${episodeCount} | ${country}`;

    const infoName = document.getElementById("info-name");
    const infoOrgName = document.getElementById("info-org-name");
    const otherInfoDiv = document.getElementById("other-info");
    const contentDiv = document.getElementById("content");
    const categoryDiv = document.getElementById("movie-category");

    infoName.textContent = movieName;
    infoOrgName.textContent = orgName;
    otherInfoDiv.textContent = otherInfo;
    contentDiv.innerHTML = `
        ${content}
        <span class="content-toggle"><button>Xem thêm <i class="fa-solid fa-angle-down"></i></button></span>
    `;
    toggleContent();
    categoryDiv.textContent = `Thể loại: ${movie.category.map(cat => cat.name).join(", ")}`;
}

function toggleContent() {
    const content = document.querySelector("#content p");
    const button = document.querySelector("#content button");
    const copiedContent = content.textContent;
    const preview = copiedContent.length > 200 ? copiedContent.slice(0, 200) + "..." : copiedContent;
    if (copiedContent.length <= 200) {
        button.style.display = "none";
    }
    content.textContent = preview;

    let isPreviewing = true;

    button.addEventListener("click", () => {
        if (isPreviewing) {
            content.textContent = copiedContent;
            button.innerHTML = `Thu gọn <i class="fa-solid fa-angle-up"></i>`;
            isPreviewing = false;
        } else {
            content.textContent = preview;
            button.innerHTML = `Xem thêm <i class="fa-solid fa-angle-down"></i>`;
            isPreviewing = true;
        }
    });
}

function autoFixNullEpisode(data) {
    if (slugEpisode) return;
    window.location.href = `${window.location.pathname}?name=${slug}&episode=${data.data.item.episodes[0].server_data[0].slug}`;
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadMovieDetails();
});
