
const reportSlider = document.querySelector('.reports-slider ');
const reportSlide = document.querySelectorAll('.report-slide');
const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

if (reportSlide) {
  window.onload = function () {
    let stopVideos = (ind) => {
      reportSlide.forEach((elem, index) => {
        let buttonPlay = elem.querySelector('.report__play');
        let video = elem.querySelector('video');
        let trigger = elem.querySelector('.report-slide__trigger')
        video.pause();
        video.currentTime = 0;
        video.removeAttribute('controls');
        trigger.classList.remove('--fade');
        if (ind != index) {
          fadeIn(buttonPlay, 300)
        }
        elem.classList.remove('--is-active');
      })
    };

    window.addEventListener('click', function (e) {
      let target = e.target || e.srcElement || e.currentTarget
      if (!reportSlider.contains(target)) {
        stopVideos(100);
      }
    });

    reportSlide.forEach((elem, index) => {
      let buttonPlay = elem.querySelector('.report__play');
      let video = elem.querySelector('.report__video video');
      let trigger = elem.querySelector('.report-slide__trigger')


      elem.addEventListener('click', () => {
        stopVideos(index);
        trigger.classList.add('--fade')
        fadeOut(buttonPlay, 300);
        video.setAttribute('controls', true);
        video.muted = false;
        elem.classList.add('--is-active');
        setTimeout(() => {
          video.currentTime = 0;
          video.play();
        }, 200)
      });

      if (!elem.classList.contains('--is-active')) {
        trigger.addEventListener('mouseover', () => {
          video.muted = true;
          video.play();
        });

        trigger.addEventListener('mouseout', () => {
          video.pause();
          video.currentTime = 0;
        });
      }


    })
  }
}

