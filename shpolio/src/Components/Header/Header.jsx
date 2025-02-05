
import styles from '../../App.module.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Header() {
  

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <span>
          PORT<br/>
          FOLIO<br/>
          HO
        </span>
      </div>
    </header>
  );
}

export default Header;
