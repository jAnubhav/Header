let terms = ["home", "about", "music", "artists", "videos", "news", "contests", "events"];
let classes = ["fa-home", "fa-eject", "fa-headphones", "fa-user-music", "fa-video", "fa-envelope", "fa-award", "fa-calendar-week"];
let nav = document.querySelector(".navbar");

let nav_down = () => {
    let items = document.querySelectorAll(".nav-item");
    let btn = document.querySelector(".nav-btn");
    btn.classList.toggle("fa-times");
    if (btn.classList.contains("fa-times")) {
        items.forEach(elem => {
            elem.classList.add("d-link");
        });
        let i = 0;
        let interval = setInterval(() => {
            items[i].classList.add("opaque");
            i++;
            if (i == 8) {
                clearInterval(interval);
            };
        }, 100);
    } else {
        items.forEach(elem => {
            elem.classList.remove("d-link");
            elem.classList.remove("opaque");
        });
    };
    document.querySelector(".navbar").classList.toggle("nav-down");
};

for (let i = 0; i != 8; i++) {
    let item = document.createElement("a");
    item.href = "#";
    item.className = "d-flex link nav-item";
    if (i == 0) {
        item.classList.add("active");
    };
    item.innerHTML = `<i class="d-flex icon fal ${classes[i]}"></i><p class="linkin">${terms[i].charAt(0).toUpperCase() + terms[i].slice(1)}</p>`;
    nav.appendChild(item);
};