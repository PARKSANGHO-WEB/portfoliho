import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styles from '../../App.module.scss';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from '../../assets/images/profile_img.jpg';
gsap.registerPlugin(ScrollTrigger);

function Section02() {
  const parents = useRef();
  const box_bg = useRef();
  const titleimg = useRef();
  const textInfo = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      
      gsap.set(box_bg.current, {
        yPercent: 10,
      });
      gsap.to(box_bg.current, {
        yPercent: -20,
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


      gsap.set("span i", {scale: 1, y:  50, opacity: 0,});

      gsap.to("span i", {
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



      
      gsap.set(titleimg.current, {
        yPercent: 20,
        opacity: 0,
      });
      gsap.to(titleimg.current,{ 
        yPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: parents.current,
          start: "-=15% +=60%",
          end: "+=50% +=50%",
          scrub: 2,
          markers: true,
        }
      });


      // gsap.set(titletext.current, {
      //   yPercent: 30,
      //   opacity: 0,
      // });
      
      // gsap.to(titletext.current,{ 
      //   yPercent: 0,
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: parents.current,
      //     start: "-=15% +=60%",
      //     end: "+=50% +=50%",
      //     scrub: 2,
      //     markers: true,
      //   }
      // });


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
          markers: true,
        }
      });
    }, parents);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.section02} ref={parents}>
      <div className={styles.box_bg} ref={box_bg}></div>
      <div className={styles.section_box}>
        <div className={styles.title_box}>
          <div className={styles.title_box_left}>
            <span className={styles.page_title} >
              <i>A</i>
              <i>b</i>
              <i>o</i>
              <i>u</i>
              <i>t</i>
              <br />
              <i>s</i>
              <i>a</i>
              <i>n</i>
              <i>g</i>
              <i>h</i>
              <i>o</i>
              <i>w</i>
            </span>
            <div className={styles.page_title_img} ref={titleimg}>
              <img src={profile} alt="profile_img" />
            </div>
          </div>
          <div className={styles.title_box_right} ref={textInfo}>
            <span>
              안녕하세요!<br />
              웹퍼블리셔 박상호입니다.<br /><br />
              퍼블리싱 작업 시에는 사용자의 기억에 남는 웹사이트,<br />
              사용하기 쉬운 웹사이트, 유지보수가 쉬운 웹사이트를 만들기 위해 노력합니다.<br /><br />
              프로젝트를 진행하면서 원활한 소통을 통해 모두가 함께<br />
              프로젝트의 목적을 달성하는 것을 최우선으로 합니다.<br /><br />
              React, TypeScript 같은 지속적으로 발전하는 기술에도<br />큰 흥미가 있어 오늘도 열심히 공부하고 있어요!<br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section02;
