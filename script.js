function moveSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 310; // Card width (300) + margin/gap
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function loadAnimation() {
  var load = document.querySelector("#load");
  setTimeout(function () {
    load.style.top = "-100%";
  }, 4000);
}
loadAnimation();