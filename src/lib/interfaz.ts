// Comportamiento de scroll compartido por todas las páginas (vía BaseLayout):
// entrada de elementos .reveal, encabezado condensado y barra de progreso.
export function iniciarInterfaz(): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Entrada por scroll
  const items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((el) => io.observe(el));
  }

  // 2. Encabezado condensado y 3. barra de progreso.
  // El evento solo agenda un frame; los cálculos ocurren en requestAnimationFrame.
  const header = document.getElementById('site-header');
  const bar = document.getElementById('progress');
  let ticking = false;

  function update() {
    const y = window.scrollY;
    header?.classList.toggle('condensed', y > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}
