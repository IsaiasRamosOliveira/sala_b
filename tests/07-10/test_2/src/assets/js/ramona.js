const link = document.querySelector(".header_user");

link.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.pathname = "/tests/07-10/test_2/src/pages/user.html";
});
