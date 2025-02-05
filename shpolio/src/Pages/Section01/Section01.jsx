import React, { useLayoutEffect, useRef } from "react";
import styles from '../../App.module.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Section01() {
  const circle = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(circle.current, {
        yPercent: 0,
        opacity: 0.5,
        scrollTrigger: {
          trigger: circle.current,
          start: "top top",
          end: "bottom top",
          pin: false,
          scrub: true
        }
      });


    }, circle);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.section01}>
      <div className={styles.horizontal_scrolling_items}>
        <div className={styles.horizontal_scrolling_items_item}>HOWORLDHOWORLDHOWORLDHOWORLDHOWORLD</div>
        <div className={styles.horizontal_scrolling_items_item}>HOWORLDHOWORLDHOWORLDHOWORLDHOWORLD</div>
      </div>
      <div className={styles.section_box} >
        <div className={styles.section_center} ref={circle}>
          <span className={styles.main_sm_text}>
            항상 즐겁게, 성실하게, 확실하게
          </span>
          <p className={styles.main_lg_text}>
            WEB PUBLISHER<br />
            <span className={styles.main_lg_span}>PARKSANGHO</span>'S<br />
            PORTFOLIO
          </p>
        </div>
        <div className={styles.scroll_container}>
          <p className={styles.scroll_text}>SCROLL DOWN</p>
          <div className={styles.scroll_wrap}>
            <div className={styles.scrollbox_mouse}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section01;
