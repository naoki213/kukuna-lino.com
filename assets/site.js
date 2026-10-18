const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('on'));
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
document.querySelectorAll('[data-year]').forEach((el) => el.textContent = new Date().getFullYear());
