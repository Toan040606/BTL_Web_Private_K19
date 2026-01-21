let home = [];
let homeMovies = [];
let homeImgs = [];
let actionMovies = [];
let chineseMovies = [];
let animeMovies = [];

async function loadMovies() {
  const res = await fetch("https://ophim1.com/v1/api/home");
  const data = await res.json();
  home = data;
  homeMovies = data.data.items;
  homeImgs = data.data.seoOnPage.og_image;
}

async function loadActionMovies() {
  const res = await fetch("https://ophim1.com/v1/api/danh-sach/hanh-dong");
  const data = await res.json();
  actionMovies = data.data.items;
}

async function loadChineseMovies() {
  const res = await fetch(
    "https://ophim1.com/v1/api/danh-sach/phim-moi?country=trung-quoc",
  );
  const data = await res.json();
  console.log(data);
  chineseMovies = data.data.items;
}

async function loadAnimeMovies() {
  const res = await fetch("https://ophim1.com/v1/api/danh-sach/hoat-hinh");
  const data = await res.json();
  animeMovies = data.data.items;
}

const fomatPosterUrl = (url) => {
  if (url.includes("thumb")) {
    return url.replace("thumb", "poster");
  }
  return url;
};

const is18Plus = (movie) => {
  return movie.category.some((category) => category.slug === "phim-18");
};

const isThaiLand = (movie) => {
  return movie.country.some((country) => country.slug === "thai-lan");
};

const removeSensitiveFilms = (list) => {
  list.forEach((film, index) => {
    if (is18Plus(film) || isThaiLand(film)) {
      list.splice(index, 1);
    }
  });
};

const renderSlider = (homeMovies) => {
  const sliderContainer = document.querySelectorAll(".slider .item");

  for (let i = 0; i < 10; i++) {
    sliderContainer[i].innerHTML = "";
  }

  for (let i = 0; i < 10; i++) {
    sliderContainer[i].innerHTML += `
    <img src="https://img.ophim1.com/uploads/movies/${fomatPosterUrl(
      homeMovies[i].thumb_url,
    )}" alt="${homeMovies[i].name}" />
    </div>
    `;
  }

  sliderContainer[0].classList.add("active");
};

const renderContent = (homeMovies) => {
  const contentContainer = document.querySelectorAll(".content-slider .item");
  for (let i = 0; i < 10; i++) {
    contentContainer[i].innerHTML = "";
  }
  for (let i = 0; i < 10; i++) {
    contentContainer[i].innerHTML += `
    <div class="item-content">
        <h3>${homeMovies[i].name}</h3>
        <p>${homeMovies[i].origin_name || ""}</p>
        <div class="buttons">
          <button class="play-btn"> <i class="fa-solid fa-play"></i> <span>Xem ngay</span></button>
          <button class="favourite-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="share-btn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[24px]" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
              <circle cx="128" cy="256" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
              <circle cx="384" cy="112" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
              <circle cx="384" cy="400" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m169.83 279.53 172.34 96.94m0-240.94-172.34 96.94"></path>
            </svg>
          </button>
        </div>
    </div>
    `;
  }
  contentContainer[0].classList.add("active");
};

const renderImgs = (homeImgs) => {
  const sliderContainer = document.querySelectorAll(".thumb-slider .item");

  for (let i = 0; i < 10; i++) {
    sliderContainer[i].innerHTML = "";
  }

  for (let i = 0; i < 10; i++) {
    sliderContainer[i].innerHTML += `
    <img src="https://img.ophim1.com${fomatPosterUrl(
      homeImgs[i],
    )}" alt="Thumbnail ${i + 1}" />
    `;
  }

  sliderContainer[0].classList.add("active");
};

let setActive = 1;

const autoNext = () => {
  let itemSlider = document.querySelectorAll(".slider .item");
  let contentSlider = document.querySelectorAll(".content-slider .item");
  let thumbSlider = document.querySelectorAll(".thumb-slider .item");
  let thumbSliderContainer = document.querySelector(".thumb-slider");

  setInterval(() => {
    if (setActive >= 10) {
      setActive = 0;
      itemSlider[9].classList.remove("active");
      contentSlider[9].classList.remove("active");
      thumbSlider[9].classList.remove("active");

      itemSlider[setActive].classList.add("active");
      contentSlider[setActive].classList.add("active");
      thumbSlider[setActive].classList.add("active");
    } else {
      itemSlider[setActive - 1].classList.remove("active");
      contentSlider[setActive - 1].classList.remove("active");
      thumbSlider[setActive - 1].classList.remove("active");

      itemSlider[setActive].classList.add("active");
      contentSlider[setActive].classList.add("active");
      thumbSlider[setActive].classList.add("active");
    }

    /*
    lấy khoảng cách của item cần di chuyển cách mép trái container bao nhiêu px 
    rồi trừ đi nửa chiều rộng container để item đó canh item ra giữa nhưng sẽ bị lệch về bên phải 
    sau đó cộng với nửa chiều rộng item để nó không bị lệch phải nữa
    */
    const scrollPosition =
      thumbSlider[setActive].offsetLeft -
      thumbSliderContainer.offsetWidth / 2 +
      thumbSlider[setActive].offsetWidth / 2;
    thumbSliderContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setActive++;
  }, 5000);
};

const clickThumb = () => {
  let itemSlider = document.querySelectorAll(".slider .item");
  let contentSlider = document.querySelectorAll(".content-slider .item");
  let thumbSlider = document.querySelectorAll(".thumb-slider .item");
  let thumbSliderContainer = document.querySelector(".thumb-slider");

  thumbSlider.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      console.log("Clicked thumb index:", setActive);
      document.querySelector(".slider .item.active").classList.remove("active");
      document
        .querySelector(".content-slider .item.active")
        .classList.remove("active");
      document
        .querySelector(".thumb-slider .item.active")
        .classList.remove("active");

      itemSlider[index].classList.add("active");
      contentSlider[index].classList.add("active");
      thumbSlider[index].classList.add("active");

      const scrollPosition =
        thumbSlider[index].offsetLeft -
        thumbSliderContainer.offsetWidth / 2 +
        thumbSlider[index].offsetWidth / 2;
      thumbSliderContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setActive = index + 1;
    });
  });
};

const renderThinhHanh = (homeMovies) => {
  const thinhHanhContainer = document.querySelector(".thinh-hanh .movie-list");
  thinhHanhContainer.innerHTML = "";

  homeMovies.forEach((movie) => {
    thinhHanhContainer.innerHTML += `
    <div class="movie-item">
      <img src="https://img.ophim1.com/uploads/movies/${movie.thumb_url}" alt="${movie.name}" />
      <h4>${movie.name}</h4>
    </div>
  `;
  });
};

const renderAnime = (animeMovies) => {
  const phimVietContainer = document.querySelector(".anime .movie-list");
  phimVietContainer.innerHTML = "";

  animeMovies.forEach((movie) => {
    phimVietContainer.innerHTML += `
    <div class="movie-item">
      <img src="https://img.ophim1.com/uploads/movies/${movie.thumb_url}" alt="${movie.name}" />
      <h4>${movie.name}</h4>
    </div>
    `;
  });
};

const renderAction = (actionMovies) => {
  const actionContainer = document.querySelector(".hanh-dong .movie-list");
  actionContainer.innerHTML = "";

  actionMovies.forEach((movie) => {
    actionContainer.innerHTML += `
      <div class="movie-item">
        <img src="https://img.ophim1.com/uploads/movies/${movie.thumb_url}" alt="${movie.name}" />
        <h4>${movie.name}</h4>
      </div>
      `;
  });
};

const renderChinese = (chineseMovies) => {
  const chineseContainer = document.querySelector(".phim-trung .movie-list");
  chineseContainer.innerHTML = "";

  chineseMovies.forEach((movie) => {
    chineseContainer.innerHTML += `
    <div class="movie-item">
      <img src="https://img.ophim1.com/uploads/movies/${movie.thumb_url}" alt="${movie.name}" />
      <h4>${movie.name}</h4>
    </div>
    `;
  });
};

async function allCategory() {
  const res = await fetch("https://ophim1.com/v1/api/quoc-gia");
  const data = await res.json();
  console.log(data);
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadMovies();
  await loadActionMovies();
  await allCategory();
  await loadChineseMovies();
  await loadAnimeMovies();

  console.log(home);
  console.log(homeMovies);
  console.log(homeImgs);
  console.log(actionMovies);
  console.log(animeMovies);
  console.log(chineseMovies);

  removeSensitiveFilms(homeMovies);
  removeSensitiveFilms(animeMovies);
  removeSensitiveFilms(actionMovies);
  removeSensitiveFilms(chineseMovies);

  renderSlider(homeMovies);
  renderContent(homeMovies);
  renderImgs(homeImgs);
  clickThumb();
  autoNext();

  renderThinhHanh(homeMovies);

  renderAnime(animeMovies);

  renderAction(actionMovies);

  renderChinese(chineseMovies);
});