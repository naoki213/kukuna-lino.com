document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });
}
document.querySelectorAll('.hero-content, .page-hero .container, .section-title, .intro-grid > *, .statement-copy').forEach((group) => {
  group.classList.remove('reveal');
  group.parentElement.closest('.reveal')?.classList.remove('reveal');
  [...group.children].forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--delay', `${i * .12}s`);
  });
});
document.querySelectorAll('.service-grid, .value-list').forEach((group) => {
  [...group.children].forEach((el, i) => el.style.setProperty('--delay', `${i * .15}s`));
});
void document.body.offsetWidth;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('on');
    else if (entry.boundingClientRect.top > 0) entry.target.classList.remove('on');
  });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
const header = document.querySelector('.home .site-header');
if (header) {
  const update = () => header.classList.toggle('scrolled', scrollY > 10 || nav?.classList.contains('open'));
  addEventListener('scroll', update, { passive: true });
  menu?.addEventListener('click', update);
  update();
}
document.querySelectorAll('[data-year]').forEach((el) => el.textContent = new Date().getFullYear());
