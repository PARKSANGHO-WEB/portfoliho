import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styles from '../../App.module.scss';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter, Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

function Section04() {
  const parents = useRef();
  const box_bg = useRef();
  const titletext = useRef();
  const textInfo = useRef();
  const mailInfo = useRef()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      
      gsap.set(box_bg.current, {
        yPercent: 10,
      });
      gsap.to(box_bg.current, {
        yPercent: -10,
        scrollTrigger: {
          trigger: parents.current,
          pin: false,
          scrub: true,
          // markers: true,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1
        }
      });

      gsap.set(titletext.current, {
        yPercent: 20,
        opacity: 0,
      });
      
      gsap.to(titletext.current,{ 
        yPercent: -20,
        opacity: 1,
        scrollTrigger: {
          trigger: parents.current,
          start: "-=15% +=60%",
          end: "+=50% +=50%",
          scrub: 2,
        }
      });


      gsap.set(textInfo.current, {
        xPercent: 20,
        opacity: 0,
      });
      
      gsap.to(textInfo.current,{ 
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: parents.current,
          start: "-=15% +=60%",
          end: "+=50% +=50%",
          scrub: 2,
        }
      });
      

      // gsap.set(mailInfo.current, {
      //   xPercent: 20,
      //   opacity: 0,
      // });
      
      // gsap.to(mailInfo.current,{ 
      //   xPercent: 0,
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: parents.current,
      //     start: "-=1% +=60%",
      //     end: "+=50% +=50%",
      //     scrub: 2,
      //   }
      // });


      gsap.set("a span", {scale: 1, y: 100, opacity: 0,});

      gsap.to("a span", {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.015,
        scrollTrigger: {
          trigger: parents.current,
          start: "top 50%",
          //end: "top 25%",
          toggleActions: "play none none reverse",
          markers: true
        }
      });


    }, parents);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.section04} ref={parents}>
      <div className={styles.box_bg} ref={box_bg}></div>
      <div className={styles.section_box}>
        <div className={styles.title_box}>
          <div className={styles.title_box_left}>
            <span className={styles.page_title} ref={titletext}>
              Contact me
            </span>
          </div>
          <div className={styles.page_text} ref={textInfo}>
            <span>
              여러분과 함께 할 순간을 기다리고 있습니다.<br />
              언제든 편하게 연락주세요!
            </span>
          </div>
          <div className={styles.page_text} ref={mailInfo}>
            <BrowserRouter>
              <Link className={styles.mail_link} onClick={() => window.location = 'mailto:sanghow3091@gmail.com'}>
                <span>s</span>
                <span>a</span>
                <span>n</span>
                <span>g</span>
                <span>h</span>
                <span>o</span>
                <span>w</span>
                <span>3</span>
                <span>0</span>
                <span>9</span>
                <span>1</span>
                <span>@</span>
                <span>g</span>
                <span>m</span>
                <span>a</span>
                <span>i</span>
                <span>l</span>
                <span>.</span>
                <span>c</span>
                <span>o</span>
                <span>m</span>
              </Link>
              <Link className={styles.number_link} onClick={() => window.location = 'tel:01040074018'}>
                <span>+82</span>
                <span>10</span>
                <span>-</span>
                <span>4007</span>
                <span>-</span>
                <span>4018</span>
              </Link>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section04;
