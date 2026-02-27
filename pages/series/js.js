const API_KEY = '6d967a137dbd0d17a690ac58bf76e5ae';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/original';

const sections = [
    {
        title: "Treanding Now",
        endpoint: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=vi-VN&page=1`
    },
    {
        title: "Phim bộ mới nhất",
        endpoint: `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.desc&language=vi-VN`
    },
    {
        title: "Phim bộ được đánh giá cao",
        endpoint: `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=100&language=vi-VN`
    },
    { 
        title: "Phim Tiên hiệp, Huyền huyễn", 
        endpoint: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765&language=vi-VN` 
    },
    { 
        title: "Top phim xuyên không hấp dẫn", 
        endpoint: `${BASE_URL}/search/multi?api_key=${API_KEY}&query=time+travel&language=vi-VN` 
    },
    { 
        title: "Phim bộ Việt Nam đặc sắc", 
        endpoint: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=vi&sort_by=first_air_date.desc&language=vi-VN` 
    },
    {
        title: "Siêu phẩm Hàn Quốc K-Drama",
        endpoint: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc&first_air_date.gte=2024-01-01&language=vi-VN`
    },
    {
    title: "Phim Trung Quốc mới nhất",
        endpoint: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=zh&sort_by=popularity.desc&first_air_date.gte=2024-01-01&language=vi-VN`
    },
    {
        title: "Phim bộ Âu Mỹ nổi bật",
        endpoint: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=en&sort_by=popularity.desc&language=vi-VN`
    },
];

async function renderMovieApp() {
    const appContainer = document.getElementById('movie-app');
    if (!appContainer) return;
    let htmlContent = "";

    for (const section of sections) {
        try {
            const response = await fetch(section.endpoint);
            const data = await response.json();
            const movies = data.results.filter(m => m.poster_path || m.backdrop_path);

            htmlContent += `
                <div class="movie-section">
                    <div class="section-header">
                        <span class="movie-header">${section.title}</span>
                        <button class="icon"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="slider-wrapper">
                        <button class="ctrl-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                        <div class="movie-grid">
                            ${movies.map(m => `
                                <div class="movie-card">
                                    <div class="card">
                                        <img src="${m.poster_path ? IMG_URL + m.poster_path : 'https://via.placeholder.com/200x300?text=No+Image'}" 
                                            alt="${m.title || m.name}" class="poster">
                                        <p class="title-label">${m.title || m.name}</p>
                                    </div>
                                    <div class="hover-card">
                                        <img src="${m.backdrop_path ? BACKDROP_URL + m.backdrop_path : (m.poster_path ? IMG_URL + m.poster_path : 'https://via.placeholder.com/300x200?text=No+Banner')}" 
     class="hover-banner">
                                        <div class="hover-content">
                                            <div class="actions">
                                                <button class="play-btn" onclick="playMovie('${m.id}', '${m.title ? 'movie' : 'tv'}')">
                                                    <i class="fas fa-play"></i> Xem ngay
                                                </button>
                                                <span class="circle-icon"><i class="far fa-heart"></i></span>
                                            </div>
                                            <h3>${m.title || m.name}</h3>
                                            <div class="meta">
                                                <span class="rating"><i class="fas fa-star"></i> ${m.vote_average.toFixed(1)}</span>
                                                <span>${(m.release_date || m.first_air_date || '').split('-')[0]}</span>
                                            </div>
                                            <p class="desc">${m.overview || 'Đang cập nhật nội dung...'}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <button class="ctrl-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error("Lỗi gọi API cho " + section.title, error);
        }
    }

    appContainer.innerHTML = htmlContent;
    addSliderLogic(); 
}

function addSliderLogic() {
    const wrappers = document.querySelectorAll('.slider-wrapper');

    wrappers.forEach(wrapper => {
        const grid = wrapper.querySelector('.movie-grid');
        const prevBtn = wrapper.querySelector('.prev-btn');
        const nextBtn = wrapper.querySelector('.next-btn');

        const scrollAmount = grid.clientWidth * 0.75;

        nextBtn.addEventListener('click', () => {
            grid.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener('click', () => {
            grid.scrollLeft -= scrollAmount;
        });
    });
}

function playMovie(id, type) {
    window.location.href = `watchMovie.html?id=${id}&type=${type}`;
}

function closePlayer() {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-player');
    
    player.src = ""; 
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', renderMovieApp);
