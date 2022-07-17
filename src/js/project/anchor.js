const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  let mobileMenu = document.querySelector('.mobile-nav');
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    }

  })
}