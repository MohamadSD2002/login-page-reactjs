export function handleBulletClick(e) {
  const index = e.target.getAttribute("data-value");

  removeShowClassFromImage();
  addShowClassCurrentImage(index);
  translateTextSlider(index);
  removeActiveClassToTarget(e.target.parentElement);
  addActiveClassToTarget(e.target);
}

function removeShowClassFromImage() {
  const images = document.querySelectorAll(".image");
  images.forEach((image) => {
    image.classList.remove("show");
  });
}

function addShowClassCurrentImage(index) {
  const currentImage = document.querySelector(`.img-${index}`);
  currentImage.classList.add("show");
}

function translateTextSlider(index) {
  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
}

function removeActiveClassToTarget(parentElement) {
  const childs = parentElement.childNodes;
  childs.forEach((child) => {
    child.classList.remove("active");
  });
}

function addActiveClassToTarget(target) {
  target.classList.add("active");
}
