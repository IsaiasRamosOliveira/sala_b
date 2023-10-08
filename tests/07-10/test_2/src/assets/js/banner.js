let banner = document.querySelector(".banner");
const btns = document.querySelectorAll(".banner__list .banner__mimg");
let title = document.querySelector(".banner__movie");

btns.forEach((btn, index, array) => {
  btn.addEventListener("click", () => {
    const img = btn.getAttribute("src");
    const alt = btn.getAttribute("alt");
    title.innerText = alt
    banner.style.backgroundImage = `url(${img})`;
  });
});
