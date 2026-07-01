/**
 * Scroll progress bar script.
 * Loaded externally via a small script tag to avoid blocking render.
 */
export function initScrollProgress() {
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const updateScrollProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollCurrent = window.scrollY;
      const scrollPercent = (scrollCurrent / scrollTotal) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    };
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
  }
}