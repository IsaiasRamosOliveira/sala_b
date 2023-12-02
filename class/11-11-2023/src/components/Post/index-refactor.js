// Nível 4

const data = [
  {
    title: "Card 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nesciunt deserunt cum explicabo, ipsum exercitationem sed.",
    bg: "red",
  },
  {
    title: "Card 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nesciunt deserunt cum explicabo, ipsum exercitationem sed.",
    bg: "green",
  },
  {
    title: "Card 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nesciunt deserunt cum explicabo, ipsum exercitationem sed.",
    bg: "purple",
  },
  {
    title: "Card 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nesciunt deserunt cum explicabo, ipsum exercitationem sed.",
    bg: "orange",
  },
];

const styles = [
  {
    red: "red",
  },
  {
    green: "green",
  },
  {
    purple: "purple",
  },
  {
    orange: "orange",
  },
];

const cards = document.querySelector("#cards");
const btn = document.querySelector("button[type='submit']");

data.forEach((post, index) => {
  cards.innerHTML += `
    <div class="card ${styles[index][post.bg]}">
        <div class="card__description">
            <h2>${post.title}</h2>
            <p>
                ${post.description}
            </p>
        </div>
    </div>
`;
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const color = document.querySelector("#color").value;
  data.push({ title, description, bg: color });
  cards.innerHTML = "";
  data.forEach((post) => {
    cards.innerHTML += `
    <div class="card ${post.bg}">
        <div class="card__description">
            <h2>${post.title}</h2>
            <p>
                ${post.description}
            </p>
        </div>
    </div>
`;
  });
});
