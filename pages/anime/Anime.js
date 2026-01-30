
const films = [
    { title: "Sakamoto Days", poster: "https://m.media-amazon.com/images/M/MV5BM2MwZDRmYWItNGIzZC00ZWExLWEwNWYtNmM1ZmU3OTA3NmY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "The Apothecary Diaries – Mùa 2 ", poster: "https://a.storyblok.com/f/178900/750x1061/9af8ea4da6/the-apothecary-diaries-season-2-key-visual.jpg/m/filters:quality(95)format(webp)" },
    { title: "One Piece -  Khai Màn", poster: "https://dep.com.vn/wp-content/uploads/2019/12/poster-chinh-thuc-phim-one-piece-stampede.jpg" },
    { title: "Solo Leveling – Mùa 2", poster: "https://cdn1.epicgames.com/spt-assets/91ab4f5ea1a8415184dd4dcbeaf50fc2/solo-levelingarise-1fhh9.jpg" },
    { title: "Dr. Stone: Science Future", poster: "https://preview.redd.it/new-key-visual-for-dr-stone-science-future-v0-kurcdtl49s0e1.jpeg?width=640&crop=smart&auto=webp&s=c0cd502f907b0f319e8f5348a8061f7f90c36388" },
    { title: "Omniscient Reader ", poster: "https://m.media-amazon.com/images/M/MV5BZjM2MTdjZDgtNTA4Yy00MWQwLWEwYTUtZGI2MDlmNzVhODc4XkEyXkFqcGc@._V1_.jpg" },
    { title: "Lazarus ", poster: "https://m.media-amazon.com/images/M/MV5BNTQ1NjU5ZDQtN2RjYi00ZmIwLWI0YWYtOTI3NmJjMjcxNzA2XkEyXkFqcGc@._V1_.jpg" },
    { title: "Black Clover", poster: "https://m.media-amazon.com/images/M/MV5BMmIxNDZmZTktY2I0Ny00YWY5LTlhYjAtZjQ4MzUxYThjY2QwXkEyXkFqcGc@._V1_.jpg" },
    { title: "Honey Lemon Soda", poster: "https://thumbnail.laftel.tv/items/portrait/a421ff22-8e2d-4290-8e54-1ee8713e6387.jpg" },
    { title: "My Happy Marriage season 2", poster: "https://a.storyblok.com/f/178900/849x1200/e48df46206/my-happy-marriage-season-2-key-visual.jpg/m/filters:quality(95)format(webp)" },
    { title: "The Beginning After the End", poster: "https://m.media-amazon.com/images/M/MV5BMTIzNDFjY2QtZTY3NC00NzY0LWE5NjQtOGY1NjliMDY0YmE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Season AHACK OR TITAN", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6e9VkoStqcl0UXueGoDz-Ks5hhdNMswuwQ&s" },
    { title: "Go Go Loser Ranger season 2 ", poster: "https://a.storyblok.com/f/178900/750x1057/1564c59fc4/go_go_loser_ranger_season2_new_key_art.jpg/m/filters:quality(95)format(webp)" },
    { title: "Fire Force season 3 part 1", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LBfjmoAl8QNzbY35NAUKuGosaw-rHC9u5g&s" },
    { title: " Kimetsu No Yaiba Mùa 4", poster: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980e76ea1ce783b7b7bfe465da8d1f4abc5d17b8dcdbcbc16230a954de291a56146b389da1a45a1584f6fd365d4db1e85f5714ef85a15986e12ec866c53661a093d/kimetsu-no-yaiba-3-1239.jpg" },
    { title: "Solo Leveling ", poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/ehgrj4hj_660x946-chuyensinhthathoangtu-s2.png" },
    { title: "Phù Thuỷ Và Quái Vật", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZEam3ZyTZXrAtChKCBvX_pQDjPx2SX42Eg&s" },
    { title: "My Hero Academia Season 7", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12793542_b_v13_ak.jpg" }
];

const row = document.getElementById("trendingRow");

row.innerHTML = films.map(f => `
    <div class="film-card">
        <div class="film-poster">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-title">${f.title}</div>
    </div>
`).join("");


const actionFilms = [
  {
    title: "Thanh Gươm Diệt Quỷ",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/z96eha0f_660x946-demonslayer.jpg"
  },
  {
    title: "Black: Huyết Chiến Ngàn Năm",
    poster: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f0/%C3%81p_ph%C3%ADch_phim_Huy%E1%BA%BFt_chi%E1%BA%BFn_ng%C3%A0n_n%C4%83m.jpg/250px-%C3%81p_ph%C3%ADch_phim_Huy%E1%BA%BFt_chi%E1%BA%BFn_ng%C3%A0n_n%C4%83m.jpg"
  },
  {
    title: "Kaiju No. 8 - Quái Vật Số 8 Phần 1",
    poster: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Solo Leveling Phần 1",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/25t6efo6_660x946-sololeveling-s1.png"
  },
  {
    title: "Blue Lock(Phần 1)",
    poster: "https://image.lag.vn/upload/news/24/06/26/GO0MrsYaEAA2e1t-724x1024_FTXD.jpg"
  },
  {
    title: "Học Viện Anh Hùng(Phần 1)",
    poster: "https://p16-sg.tiktokcdn.com/obj/tos-alisg-avt-0068/556416ff9da8ceb2a6c6f3db013147c8"
  },
  {
    title: "Đại Chiến Titan Mùa 1",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAC4ccDqE8rNQCHDRWHtJDYa4tt140fqQckg&s"
  },
  {
    title: "Chú Thuật Hồi Chiến ",
    poster: "https://product.hstatic.net/1000376556/product/1_56092b1efc134cb7b7daff7e2cf52e_ef03eadf6a9f4b9ab89c9ad0dfaf9d13_1024x1024.jpg"
  },
  {
    title: "Attack On Titan",
    poster: "https://cdn.voh.com.vn/voh/Image/2022/05/04/top-anime-hanh-dong-hay-nhat-hinh-2.JPG?t=o"
  },
  {
    title: "Solo Leveling Season 2",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/ehgrj4hj_660x946-chuyensinhthathoangtu-s2.png"
  },
  {
    title: "Black Clover: New Season",
    poster: "https://a.storyblok.com/f/178900/1064x1505/c7e5cdea4b/black-clover-new.png/m/filters:quality(95)format(webp)"
  }
];
const rowac = document.getElementById("trendingRowac");

rowac.innerHTML = actionFilms.map(f => `
    <div class="film-cardac">
        <div class="film-posterac">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleac">${f.title}</div>
    </div>
`).join("");


const humorousfilms = [
 
  {
    title: "Maou Gakuin no Futekigousha",
    poster: "https://i.ebayimg.com/images/g/vkwAAOSwaj1oKBC~/s-l1200.jpg"
  },
  {
    title: "Nguyệt Đạo Dị Giới(Phần 1)",
    poster: "https://image.lag.vn/upload/news/23/10/25/anime-nguyet-dao-di-gioi-phan-2-11_YRMH.jpg"
  },
  {
    title: "The Devil Is a Part-Timer!",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hataraku_Ma%C5%8D-sama%21_light_novel_vol_1.jpg"
  },
  {
    title: "Học Viện Ma Vương(Phần 1) ",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBcNbL9wWrFcwVg-M50zyt7LhEBUx7L2ySw&s"
  },
  {
    title: "Học Viện Ma Vương(Phần 2) ",
    poster: "https://animehay.ee/public/uploads/hoc-vien-ma-vuong.webp"
  },
{
    title: "Frieren: Pháp Sư Tiễn Tảng(Phần 1)",
    poster: "https://dilib.vn/img/news/2024/03/larger/14768-phap-su-tien-tang-sousou-no-frieren-1.jpg?v=1081"
  },
  {
    title: "The Eminence in Shadow",
    poster: "https://m.media-amazon.com/images/M/MV5BMDFmMWJlMWYtMDFkNi00OWViLTkzOGEtNDI0YWNmM2M5MzI5XkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Welcome to Demon School! Iruma-kun",
    poster: "https://m.media-amazon.com/images/M/MV5BMDE1NzZlNTUtZWJmYi00ZTUwLTg0MDQtOWIzZmI2MzdiOTk2XkEyXkFqcGc@._V1_.jpg"
  }
];
const rowh = document.getElementById("trendingRowh");

rowh.innerHTML = humorousfilms.map(f => `
    <div class="film-cardh">
        <div class="film-posterh">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleh">${f.title}</div>
    </div>
`).join("");



const TCfilms = [
  {
    title: "Phàm Nhân Tu Tiên (Phần 3)",
    poster: "https://hoathinh3d.hot/wp-content/uploads/2022/11/pham-nhan-tu-tien-phan-3-3.jpg"
  },
  {
    title: "Ở Rể ( Phần 1)",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWjpartGGFj_Bi5K2lssZwBPub0rSOtXaGA&s"
  },
  {
    title: "Phàm Nhân Tu Tiên (Phần 2)",
    poster: "https://p16-sg.tiktokcdn.com/obj/tos-alisg-avt-0068/4bed451e768af8fc689223c9c989a30b"
  },
  {
    title: "Tân Thần Bảng: Dương Tiễn",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCHGMep03HAVIzRWaXTLGKeT75hnBHwNdMw&s"
  },
  {
    title: "Ở Rể ( Phần 2)",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw2_k8EdZjqBPgRxJiIh1e1DYvBXWaBfECQ&s"
  },
  {
    title: "Bạch Xà: Duyên Khởi",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/10/31/uf89nyf6_whitesnake_660x946.png"
  },
  {
    title: "Nghịch Tiên Tà Thần",
    poster: "https://pic5.iqiyipic.com/image/20251226/8c/f4/a_100543682_m_601_vi_m4_260_360.jpg"
  },
  {
    title: " Đại Chúa Tể",
    poster: "https://i.pinimg.com/736x/3d/52/5a/3d525a4731aa9ee0bd30fe1a024fd54b.jpg"
  },
  {
    title: "Thần Lan Kỳ Vực Vô Song Châu",
    poster: "https://media.themoviedb.org/t/p/w116_and_h174_face/wAVJiJutAa8GsO7HEC7twH4C3KN.jpg"
  },
  {
    title: "Phàm NHân Tu Tiên (Phần 1)",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLcuDAhLRlmJxdDYivwwSTOKkebE7clEb1A&s"
  },
  {
    title: "Trảm Thần: Phàm Trần Thần Vực",
    poster: "https://static.aircms.xyz/storage/images/tram-than-pham-tran-than-vuc/tram-than-pham-tran-than-vuc-thumb.webp"
  },
  {
    title: "Thần Võ Thiên Tôn",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVwOiG0O1u33fZa7U0W4kiyxOFr4_gCm-OA&s"
  },
  {
    title: "Double Patty (2021)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/a/a2/Nezha_film_poster.jpg"
  },
  {
    title: "Đấu Phá Thương Khung ",
    poster: "https://vidrelax.com/wp-content/uploads/2025/09/dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien-5.jpg"
  },
  {
    title: "Mục Thần Ký",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKAmWEJP6qWIZNyIIvXCwREvbM2K9_1-YEQ&s"
  }
];
const rowme = document.getElementById("trendingRowme");

rowme.innerHTML = TCfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");

// const CARD_WIDTHME = 190; 
// const GAPME = 18; 
// const SCROLL_COUNTME = 7.2;
//  document.getElementById("trendNextme").onclick = () => 
//   { rowme.scrollLeft += (CARD_WIDTHME + GAPME) * SCROLL_COUNTME; }; 
// document.getElementById("trendPrevme").onclick = () =>
//   { rowme.scrollLeft -= (CARD_WIDTHME + GAPME) * SCROLL_COUNTME; };

function setupSlider(rowId, nextId, prevId) {
    const row = document.getElementById(rowId);
    document.getElementById(nextId).onclick = () => {
        row.scrollLeft += (190 + 18) * 7.2;
    };
    document.getElementById(prevId).onclick = () => {
        row.scrollLeft -= (190 + 18) * 7.2;
    };
}
setupSlider("trendingRow", "trendNext", "trendPrev");
setupSlider("trendingRowac", "trendNextac", "trendPrevac");
setupSlider("trendingRowh", "trendNexth", "trendPrevh");
setupSlider("trendingRowme", "trendNextme", "trendPrevme");
setupSlider("trendingRowhd", "trendNexthd", "trendPrevhd");
setupSlider("trendingRowpm", "trendNextpm", "trendPrevpm");
setupSlider("trendingRowth", "trendNextth", "trendPrevth");

const HDfilms = [
  {
    title: "Đại Chiến Titan (Phần 4)",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/9ngt53p4_660x946-attackontitan-4.jpg"
  },
  {
    title: "Fire Force season 3 part 1",
    poster: "https://a.storyblok.com/f/178900/1064x1596/7394dd442d/fire-force-season-3-key-art.png/m/filters:quality(95)format(webp)"
  },
  {
    title: "Học Viện Anh Hùng(Phần 3)",
    poster: "https://pic3.iqiyipic.com/image/20210324/be/85/a_100452620_m_601_zh-CN_260_360.jpg"
  },
  {
    title: "Bleach: Sứ Giả Thần Chết",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1AKPA5RX8wtUWCOmiETgjOjs37b2yWWBLQ&s"
  },
  {
    title: "Blue Lock(Phần 2)",
    poster: "https://preview.redd.it/blue-lock-season-2-key-visual-v0-r8y028b0zdjd1.jpeg?auto=webp&s=825688e5fb309187c9a092e27e499f2f19d74ec4"
  },
  {
    title: "Thanh Gươm Diệt Quỷ",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/z96eha0f_660x946-demonslayer.jpg"
  },
  {
    title: "Thanh Gươm Diệt Quỷ ",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/07/05/2y10nd8w_660x946-thanhguomdietquy-kyvientran-demo.jpg"
  },
  {
    title: " blue Lock(Phần 2)",
    poster: "https://preview.redd.it/blue-lock-season-2-key-visual-v0-r8y028b0zdjd1.jpeg?auto=webp&s=825688e5fb309187c9a092e27e499f2f19d74ec4"
  },
  {
    title: "Học Viện Anh Hùng(Phần 3)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/c/c6/HocvienanhhungNhiemvugiaicuuthegioi.jpeg"
  },
  {
    title: "Học Viện Anh Hùng(Phần 4)",
    poster: "https://pic8.iqiyipic.com/image/20210322/ca/ea/a_100355406_m_601_en_260_360.jpg"
  },
  {
    title: "Chú Thuật Hồi Chiến (Phần 1)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/8/82/Jujutsu_Kaisen_vol_1_cover.jpeg"
  },
  {
    title: "Thợ Săn Tí Hon",
    poster: "https://animehay.mx/wp-content/uploads/2025/10/tho-san-ti-hon.jpg"
  },
  {
    title: "Gia Đình Điệp Viên",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/05/20/d4ppmz00_660x946-spyxfamily-demoa2731c005ce704ec40c7ff515b2b1afb.jpg"
  },
  {
    title: "One Punch Man",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWGpiYDpHeGyaL4W-sUlhbpgL2M-qrhOZpg&s"
  }
];
const rowhd = document.getElementById("trendingRowhd");

rowhd.innerHTML = HDfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");
const PMfilms = [
  {
    title: "Spirited Away",
    poster: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Princess Mononoke",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tnh6wRvPlnNCLm5k-3ANJYNnnilF0U353w&s"
  },
  {
    title: "Nausicaä of the Valley of the Wind",
    poster: "https://m.media-amazon.com/images/M/MV5BODBhMTI3YzMtNTRjYS00OTFkLWJmODUtNjJiNzcwYTVkNDhiXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Howl's Moving Castle",
    poster: "https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1726506268/Events/2024/1923/WebsitePoster_1000x1480.jpg.jpg"
  },
  {
    title: "Castle in the Sky",
    poster: "https://m.media-amazon.com/images/I/81bxTPiED1L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "One Piece: Stampede",
    poster: "https://upload.wikimedia.org/wikipedia/vi/8/8a/One_Piece_Stampede_poster.jpg"
  },
  {
    title: "Your Name",
    poster: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/b3/Your_Name_novel.jpg/330px-Your_Name_novel.jpg"
  },
  {
    title: " Jujutsu Kaisen 0",
    poster: "https://vn.japo.news/contents/wp-content/uploads/2021/07/513026.jpg"
  },
  {
    title: "Made in Abyss: Dawn of the Deep Soul",
    poster: "https://play-lh.googleusercontent.com/fYIixTpagv_npo6nUfrjqDBPS3GQ9ghmf5EUDMWqKlnVhFQvY8bqymHVf_61tATQfy7NDkHiUc5TizdPOQE"
  },
  {
    title: "Hunter x Hunter: The Last Mission",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsGIFY86xvxFJXxUl-GTf33emxZGNnhsHOw&s"
  },
  {
    title: "Tensei Shitara Slime Datta Ken",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9JlvxWfAi-GB0NjidvfClj-JMWsSzHOBLw&s"
  },
  {
    title: "Demon Slayer: Mugen Train",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrN2eGF6jvvxXRDrUlzlHKGnld5WqCIYgJMA&s"
  },
  {
    title: "Vinland Saga",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVcbV_gbE1EPu6Wiu0oOpC43vuX61ebvn1A&s"
  },
  {
    title: "BC:Sword of the Wizard King ",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Black_Clover_Sword_of_The_Wizard_King.jpg"
  },
  {
    title: "TSDS: Cursed by Light",
    poster: "https://m.media-amazon.com/images/M/MV5BZDM4OWNiYjUtM2QwYy00NTk4LWFmYWUtZjIzNTc3MTVhZjQzXkEyXkFqcGc@._V1_.jpg"
  }
];
const rowpm = document.getElementById("trendingRowpm");

rowpm.innerHTML = PMfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");
const THfilms = [
  {
    title: "Magical Warfare",
    poster: "https://m.media-amazon.com/images/M/MV5BMjRjZWM1ZTgtNzczNi00ZDM3LWJiNDktN2FlNjgzYmVjYTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Horimiya (Phần 2)",
    poster: "https://a.storyblok.com/f/178900/750x1060/2dd59a00d2/61e35baca6c08ada5ca6a9a08f72ff5c1613247162_main.jpg/m/filters:quality(95)format(webp)"
  },
  {
    title: "Teasing Master Takagi-san",
    poster: "https://m.media-amazon.com/images/M/MV5BNjliYzA2OWQtNTI3Mi00OTc4LWJlZDktNzhmZTc5YjhiZDEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "My Teen Romantic Comedy SNAFU",
    poster: "https://a.storyblok.com/f/178900/640x960/22bd012f7f/801543fc3b875a3e40b8f4793297595b1428089612_full.jpg/m/640x960"
  },
  {
    title: "A Silent Voice",
    poster: "https://cdn.myanimelist.net/r/200x268/images/anime/6/79634.jpg?s=87e8008558e86f46683e03072187a147"
  },
  {
    title: "Your Lie in April",
    poster: "https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Relife ",
    poster: "https://m.media-amazon.com/images/M/MV5BOGViMzRkYzctM2IyNi00OWFmLTliMDMtNjk1MmE0M2QyM2I1XkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Lớp Học Ám Sát (Phần 2)",
    poster: "https://pic2.iqiyipic.com/image/20211112/39/53/a_100484214_m_601_en_m1_260_360.jpg"
  },
  {
    title: "Clannad: After Story)",
    poster: "https://i.pinimg.com/474x/81/7b/3a/817b3a08d8e4c7282e3c1f567836059d.jpg"
  },
  {
    title: "Học Viện Anh Hùng(Phần 4)",
    poster: "https://pic8.iqiyipic.com/image/20210322/ca/ea/a_100355406_m_601_en_260_360.jpg"
  },
  {
    title: "Love, Chunibyo & Other Delusions",
    poster: "https://images-na.ssl-images-amazon.com/images/I/714Hvk-d5mL.jpg"
  },
  {
    title: "We Never Learn",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oCorYobpllQzmpnbDa16ptZNeZykqtP1kQ&s"
  },
  {
    title: "Kakegurui",
    poster: "https://images.justwatch.com/poster/298617476/s718/kakegurui-twin.jpg"
  },
  {
    title: "Hyouka - Kem Đá",
    poster: "https://bloganchoi.com/wp-content/uploads/2021/01/hyouka-2012.jpg"
  }
];
const rowth = document.getElementById("trendingRowth");

rowth.innerHTML = THfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");

const filmss = [
  {
    title: "One Push Man",
    sub: "Drama · Music · Mystery",
    poster: "https://cdn2.fptshop.com.vn/unsafe/800x0/hinh_nen_saitama_2_346399b3ee.png",
    bg: "https://cdn2.fptshop.com.vn/unsafe/800x0/hinh_nen_saitama_2_346399b3ee.png"
  },
  {
    title: "Tôi Thăng Cấp Một Mình",
    sub: "Action · Fantasy · Solo Leveling",
    poster: "https://thuvienanime.net/wp-content/uploads/2023/06/solo-leveling-chi-minh-toi-thang-cap-thuvienanime-2-min.jpg",
    bg: "https://thuvienanime.net/wp-content/uploads/2023/06/solo-leveling-chi-minh-toi-thang-cap-thuvienanime-2-min.jpg"
  },
  {
    title: "Thanh Gươm Diệt Quỷ",
    sub: "Action · Hashira Training Arc",
    poster: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165568/Originals/thanh-guom-diet-quy.jpg",
    bg: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165568/Originals/thanh-guom-diet-quy.jpg"
  },
  {
    title: "Quái Vật Số 8",
    sub: "Action · Sci-Fi · Kaiju No. 8",
    poster: "https://static.gamehub.vn/images/2024/06/17/gamehub-kaiju-no8-4.jpg",
    bg: "https://static.gamehub.vn/images/2024/06/17/gamehub-kaiju-no8-4.jpg"
  },
  {
    title: "Pháp Sư Tiễn Biệt Frieren",
    sub: "Adventure · Fantasy · Masterpiece",
    poster: "https://gamelade.vn/wp-content/uploads/2025/03/Frieren-Beyond-Journeys-End-1.webp",
    bg: "https://gamelade.vn/wp-content/uploads/2025/03/Frieren-Beyond-Journeys-End-1.webp"
  },
  {
    title: "Chú Thuật Hồi Chiến",
    sub: "Action · Supernatural · Jujutsu Kaisen",
    poster: "https://cdn-media.sforum.vn/storage/app/media/thaouyen/nhan-vat-chinh-cua-chu-thuat-hoi-chien-thumbnail.jpg",
    bg: "https://cdn-media.sforum.vn/storage/app/media/thaouyen/nhan-vat-chinh-cua-chu-thuat-hoi-chien-thumbnail.jpg"
  },
  {
    title: "Gia Đình Điệp Viên",
    sub: "Comedy · Spy · Spy x Family",
    poster: "https://cdn.shopify.com/s/files/1/0731/6514/4343/files/gia-dinh-diep-vien-1.jpg?v=1744802002",
    bg: "https://cdn.shopify.com/s/files/1/0731/6514/4343/files/gia-dinh-diep-vien-1.jpg?v=1744802002"
  },
  {
    title: "Sakamoto Days",
    sub: "Action · Comedy · Hitman",
    poster: "https://www.accioncine.es/wp-content/uploads/2025/05/Sakamoto-Days.jpg",
    bg: "https://www.accioncine.es/wp-content/uploads/2025/05/Sakamoto-Days.jpg"
  },
  {
    title: "Thợ Săn Quỷ",
    sub: "Action · Horror · Chainsaw Man",
    poster: "https://cmavn.com/wp-content/uploads/1-151.jpg",
    bg: "https://cmavn.com/wp-content/uploads/1-151.jpg"
  },
  {
    title: "Thiếu Niên Và Chim Diệc",
    sub: "Studio Ghibli · Oscar Winner",
    poster: "https://i.ytimg.com/vi/efrw3LuIKJ4/maxresdefault.jpg",
    bg: "https://i.ytimg.com/vi/efrw3LuIKJ4/maxresdefault.jpg"
  }
];
let activeIdx = 0;
let slideTimer;

const bgNode = document.getElementById('hero-background');
const titleNode = document.getElementById('hero-title');
const subNode = document.getElementById('hero-subtitle');
const trackNode = document.getElementById('hero-thumbnail-track');

function initSlider() {
    trackNode.innerHTML = filmss.map((f, i) => `
        <div class="hero-thumb-item" id="thumb-${i}" onclick="selectThumb(${i})">
            <img src="${f.poster}" alt="">
        </div>
    `).join('');
    
    updateDisplay(0);
    startAutoSlide();
}

function updateDisplay(index) {
    activeIdx = index;
    const film = filmss[index];
    const infoNode = document.querySelector('.hero-info-box');
    infoNode.classList.remove('animate-info');
    void infoNode.offsetWidth; 
    bgNode.style.backgroundImage = `url('${film.bg}')`;
    titleNode.innerText = film.title;
    subNode.innerText = film.sub;
    infoNode.classList.add('animate-info');
    document.querySelectorAll('.hero-thumb-item').forEach(el => el.classList.remove('active'));
    const currentThumb = document.getElementById(`thumb-${index}`);
    currentThumb.classList.add('active');
    const container = document.querySelector('.hero-thumbnail-scroll'); // Class của div bao ngoài thanh cuộn
if (container) {
    const scrollPos = currentThumb.offsetLeft - (container.offsetWidth / 2) + (currentThumb.offsetWidth / 2);
    container.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
    });
}
}

function selectThumb(index) {
    clearInterval(slideTimer);
    updateDisplay(index);
    startAutoSlide();
}

function startAutoSlide() {
    slideTimer = setInterval(() => {
        let next = (activeIdx + 1) % filmss.length;
        updateDisplay(next);
    }, 5000);
}

initSlider();

