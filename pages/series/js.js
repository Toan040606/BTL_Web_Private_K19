const BASE_URL = 'https://ophim1.com';
const API_URL = 'https://ophim1.com/danh-sach';

const sections = [
    { title: "Phim bộ mới nhất", endpoint: `https://ophim1.com/v1/api/danh-sach/phim-bo?page=1` },
    { title: "Phim Việt Nam đặc sắc", endpoint: `https://ophim1.com/v1/api/quoc-gia/viet-nam?page=1` },
    { title: "Siêu phẩm Hàn Quốc K-Drama", endpoint: `https://ophim1.com/v1/api/quoc-gia/han-quoc?page=1` },
    { title: "Phim Trung Quốc mới nhất", endpoint: `https://ophim1.com/v1/api/quoc-gia/trung-quoc?page=1` },
    {
        title: "Phim bom tấn Hollywood",
        endpoint: `https://ophim1.com/v1/api/danh-sach/phim-le?page=1`
    }
];

async function renderMovieApp() {
    const appContainer = document.getElementById('movie-app');
    if (!appContainer) return;
    let htmlContent = "";

    for (const section of sections) {
        try {
            const response = await fetch(section.endpoint);
            const data = await response.json();

            let movies = [];
            if (data.items) {
                movies = data.items;
            } else if (data.data && data.data.items) {
                movies = data.data.items;
            }

            const cdnImage = data.pathImage || (data.data && data.data.params && data.data.params.cdn_path) || "https://img.otruyenapi.com/uploads/movies/";

            if (movies.length === 0) continue;

            htmlContent += `
                <div class="movie-section">
                    <div class="section-header">
                        <span class="movie-header">${section.title}</span>
                    </div>
                    <div class="slider-wrapper">
                        <button class="ctrl-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                        <div class="movie-grid">
                            ${movies.map(m => {
                let posterPath = m.poster_url || m.thumb_url || "";

                if (posterPath && !posterPath.startsWith("http")) {
                    posterPath = "https://img.ophim.live/uploads/movies/" + posterPath;
                }
                if (!posterPath.startsWith('http')) {
                    const cleanCDN = cdnImage.endsWith('/') ? cdnImage : cdnImage + '/';
                    const cleanThumb = posterPath.startsWith('/') ? posterPath.substring(1) : posterPath;
                    posterPath = cleanCDN + cleanThumb;
                }

                return `
                                <div class="movie-card">
                                    <div class="card">
                                        <img src="${posterPath}" alt="${m.name}" class="poster" referrerpolicy="no-referrer">
                                        <p class="title-label">${m.name}</p>
                                    </div>
                                    <div class="hover-card">
                                        <img src="${posterPath}" class="hover-banner" referrerpolicy="no-referrer">
                                        <div class="hover-content">
                                            <div class="actions">
                                                <button class="play-btn" onclick="playMovie('${m.slug}')">
                                                    <i class="fas fa-play"></i> Xem ngay
                                                </button>
                                            </div>
                                            <h3>${m.name}</h3>
                                            <div class="meta"><span>${m.year || '2026'}</span> <span class="rating">HD</span></div>
                                        </div>
                                    </div>
                                </div>`;
            }).join('')}
                        </div>
                        <button class="ctrl-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>`;
        } catch (error) {
            console.error("Lỗi mục " + section.title, error);
        }
    }
    appContainer.innerHTML = htmlContent;
    addSliderLogic();
}

function playMovie(slug) {
    window.location.href = `../watch/index.html?name=${slug}&episode=`;
}

function addSliderLogic() {
    const wrappers = document.querySelectorAll('.slider-wrapper');
    wrappers.forEach(wrapper => {
        const grid = wrapper.querySelector('.movie-grid');
        const prevBtn = wrapper.querySelector('.prev-btn');
        const nextBtn = wrapper.querySelector('.next-btn');
        if (!grid || !prevBtn || !nextBtn) return;

        nextBtn.onclick = () => grid.scrollBy({ left: 600, behavior: 'smooth' });
        prevBtn.onclick = () => grid.scrollBy({ left: -600, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', renderMovieApp);