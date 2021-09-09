let terms = ["home", "about", "music", "artists", "videos", "news", "contests", "events"];
let classes = ["fa-home", "fa-eject", "fa-headphones", "fa-user-music", "fa-video", "fa-envelope", "fa-award", "fa-calendar-week"];
let nav = document.querySelector(".navbar");

let nav_down = () => {
    document.querySelector(".nav-btn").classList.toggle("fa-times");
    document.querySelector(".navbar").classList.toggle("nav-down");
};

for (let i = 0; i != 8; i++) {
    let item = document.createElement("a");
    item.href = "#";
    item.className = " d-flex link";
    if (i == 0) {
        item.classList.add("active");
    };
    item.innerHTML = `<i class="d-flex icon fal ${classes[i]}"></i><p class="linkin">${terms[i].charAt(0).toUpperCase() + terms[i].slice(1)}</p>`;
    nav.appendChild(item);
};