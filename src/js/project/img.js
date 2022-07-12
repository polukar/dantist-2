let imgSrc = document.querySelectorAll('[data-src]');

if (imgSrc) {
  window.onload = function () {
    imgSrc.forEach(elem => {
      let dataSrc = elem.getAttribute('data-src');
      elem.src = dataSrc;
    })
  }
}