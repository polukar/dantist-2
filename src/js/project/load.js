let imgSrc = document.querySelectorAll('[data-src]');

if (imgSrc) {
  window.onload = function () {
    imgSrc.forEach(elem => {
      let dataSrc = elem.getAttribute('data-src');
      elem.src = dataSrc;
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.head.innerHTML = document.head.innerHTML + '<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;500;600;700;800&display=swap" rel="stylesheet">'
  })


}