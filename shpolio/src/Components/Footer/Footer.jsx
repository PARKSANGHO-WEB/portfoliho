
import styles from '../../App.module.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_box}>
        <span>
          PORTFOLIOHO.
        </span>
      </div>
      <div className={styles.footer_box}>
        <span>
          ⓒ 2025. SANGHOW ALL RIGHT RESERVED.
        </span>
      </div>
      <div className={styles.footer_box}>
        <span>
          MADE BY 
        </span>
        <span> SANGHOW.</span>
      </div>
    </footer>
  );
}

export default Footer;
