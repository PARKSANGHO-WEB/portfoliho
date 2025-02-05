import Lenis from '@studio-freight/lenis';

const smooth = () => {
  const lenis = new Lenis();


  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default smooth;