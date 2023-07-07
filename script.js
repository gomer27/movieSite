// slide start
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 448
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});
// slide end

// dark mode start
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  "header nav,aside,section,.movie-list-title,.movie-list-filter #filter-movie,.toggle,.toggle-ball,aside i"
);
ball.addEventListener("click", function () {
  console.log(items);
  items.forEach((item) => item.classList.toggle("active"));
});
// dark mode end
