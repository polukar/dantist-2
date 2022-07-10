const header = document.querySelector('.header');


if (header) {
  let burger = header.querySelector('.burger');
  let mibileMenu = document.querySelector('.mobile-nav');
  let close = mibileMenu.querySelector('.close-menu');

  burger.addEventListener('click', () => {
    mibileMenu.classList.add('active');
  })

  close.addEventListener('click', () => {
    mibileMenu.classList.remove('active');
  });

  document.addEventListener('scroll', () => {
    const posTop = document.body.getBoundingClientRect().top;
    if (-posTop > 200) {
      header.classList.add('--scroll');
    } else {
      header.classList.remove('--scroll');
    }
  })
}