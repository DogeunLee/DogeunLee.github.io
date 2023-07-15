const links = document.querySelectorAll("aside a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});
