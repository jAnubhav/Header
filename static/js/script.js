let terms = ["general", "business", "entertainment", "health", "science", "sports", "technology"]
let nav = document.querySelector(".navbar");

let nav_down = () => {
    document.querySelector("hr").classList.toggle("d-flex")
    document.querySelector("nav").classList.toggle("nav-down")
    document.querySelector(".main-nav").classList.toggle("nav-down")
    document.querySelector(".navbar").classList.toggle("nav-down")
    document.querySelector(".btn").classList.toggle("nav-down")
}

for (let i = 0; i != 7; i++) {
    let btn = document.createElement("button");
    btn.className = "link";
    btn.textContent = terms[i].charAt(0).toUpperCase() + terms[i].slice(1);
    nav.appendChild(btn);
};