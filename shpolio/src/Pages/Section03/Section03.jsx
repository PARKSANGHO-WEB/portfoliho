import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styles from '../../App.module.scss';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter, Link } from "react-router";
import linkIco from '../../assets/images/arrow.svg';

gsap.registerPlugin(ScrollTrigger);

function Section03() {
  const parents2 = useRef();
  const portParent = useRef([]);
  const portLine = useRef([]);
  const portLeft = useRef([]);
  const portRight = useRef([]);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // gsap.set(titletext.current, {
      //   yPercent: 20,
      //   opacity: 0,
      // });
      
      // gsap.to(titletext.current,{ 
      //   yPercent: 0,
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: parents2.current,
      //     start: "-=11% +=611",
      //     end: "+=110% +=110%",
      //     scrub: 1,
      //   }
      // });


      gsap.set("span i", {scale: 1, y:  50, opacity: 0,});

      gsap.to("span i", {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.015,
        scrollTrigger: {
          trigger: parents2.current,
          start: "top 50%",
          //end: "top 25%",
          toggleActions: "play none none reverse",
          markers: true
        }
      });
      
      
      
      
      gsap.set(portLine.current, {
        width: "0%",
      });
      
      gsap.to(portLine.current,{ 
        width: "100%",
        scrollTrigger: {
          trigger: portParent.current,
          start: "+=110% +=110%",
          end: "+=110% +=110%",
          scrub: 2,
        }
      });

      gsap.set(portLeft.current, {
        xPercent: -20,
        opacity: 0,
      });
      
      gsap.to(portLeft.current,{ 
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: portParent.current,
          start: "+=110% +=110%",
          end: "+=110% +=110%",
          scrub: 6,
        }
      });

      gsap.set(portRight.current, {
        xPercent: 20,
        opacity: 0,
      });
      
      gsap.to(portRight.current,{ 
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: portParent.current,
          start: "+=110% +=110%",
          end: "+=110% +=110%",
          scrub: 10,
        }
      });

    }, parents2);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.section03} ref={parents2}>
      <div className={styles.section_box}>
        <div className={styles.title_box}>
            <span className={styles.page_title} >
              <i>M</i>
              <i>y</i>
              <i>-</i>
              <i>w</i>
              <i>o</i>
              <i>r</i>
              <i>k</i>
              <i>s</i>
            </span>
        </div>
        <div className={styles.portfolio_box}>
          <BrowserRouter>
            <Link  to="./Work/Koreaart/Koreaart">
              <div className={styles.portfolio_box_item} ref={elem => (portParent.current[0] = elem)}>
                <div className={styles.portfolio_border} ref={elem => (portLine.current[0] = elem)}></div>
                <div className={styles.portfolio_text_left} ref={elem => (portLeft.current[0] = elem)}>
                  <span className={styles.portfolio_date}>
                    21.11-22.05zz
                  </span>
                </div>
                <div className={styles.portfolio_text_right} ref={elem => (portRight.current[0] = elem)}>
                  <span className={styles.portfolio_title}>
                  서울호서예술실용전문학교 웹사이트 개편
                  </span>
                  <span className={styles.portfolio_skill}>
                    <span className={styles.portfolio_skill_item}>
                      #HTML
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #CSS
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #JAVASCRIPT
                    </span>
                    <span className={styles.portfolio_skill_item}>
                    #CAFE24
                    </span>  
                    <span className={styles.portfolio_skill_item}>
                      #PROMOTION
                    </span>  
                    <span className={styles.portfolio_skill_item}>
                      #월3~4건
                    </span>  
                  </span>
                </div>
              </div>
              <div className={styles.cover_group}>
                <div className={styles.cover1}></div>
                <div className={styles.cover2}></div>
              </div>
            </Link>
            <Link>
              <div className={styles.portfolio_box_item} ref={elem => (portParent.current[1] = elem)}>
              <div className={styles.portfolio_border} ref={elem => (portLine.current[1] = elem)}></div>
                <div className={styles.portfolio_text_left} ref={elem => (portLeft.current[1] = elem)}>
                  <span className={styles.portfolio_date}>
                    23.11-24.01
                  </span>
                </div>
                <div className={styles.portfolio_text_right}  ref={elem => (portRight.current[1] = elem)}>
                  <span className={styles.portfolio_title}>
                    GUESS 프로모션 페이지 제작
                  </span>
                  <span className={styles.portfolio_skill}>
                    <span className={styles.portfolio_skill_item}>
                      #HTML
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #CSS
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #JAVASCRIPT
                    </span>
                    <span className={styles.portfolio_skill_item}>
                    #CAFE24
                    </span>  
                    <span className={styles.portfolio_skill_item}>
                      #PROMOTION
                    </span>  
                    <span className={styles.portfolio_skill_item}>
                      #월3~4건
                    </span>  
                  </span>
                </div>
              </div>
              <div className={styles.cover_group}>
                <div className={styles.cover1}></div>
                <div className={styles.cover2}></div>
              </div>
            </Link>
            <Link>
              <div className={styles.portfolio_box_item} ref={elem => (portParent.current[2] = elem)}>
              <div className={styles.portfolio_border} ref={elem => (portLine.current[2] = elem)}></div>
                <div className={styles.portfolio_text_left} ref={elem => (portLeft.current[2] = elem)}>
                  <span className={styles.portfolio_date}>
                    23.11-24.01
                  </span>
                </div>
                <div className={styles.portfolio_text_right}  ref={elem => (portRight.current[2] = elem)}>
                  <span className={styles.portfolio_title}>
                    롯데에너지머터리얼즈 홈페이지 구축 (국/영문)
                  </span>
                  <span className={styles.portfolio_skill}>
                    <span className={styles.portfolio_skill_item}>
                      #HTML
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #CSS
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #JAVASCRIPT
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #FULLPAGE.JS
                    </span>  
                    <span className={styles.portfolio_skill_item}>
                      #SWIPER.JS
                    </span>  
                  </span>
                </div>
              </div>
              <div className={styles.cover_group}>
                <div className={styles.cover1}></div>
                <div className={styles.cover2}></div>
              </div>
            </Link>
            <Link>
              <div className={styles.portfolio_box_item} ref={elem => (portParent.current[3] = elem)}>
              <div className={styles.portfolio_border} ref={elem => (portLine.current[3] = elem)}></div>
                <div className={styles.portfolio_text_left} ref={elem => (portLeft.current[3] = elem)}>
                  <span className={styles.portfolio_date}>
                    22.08-23.03
                  </span>
                </div>
                <div className={styles.portfolio_text_right}  ref={elem => (portRight.current[3] = elem)}>
                  <span className={styles.portfolio_title}>
                    신한은행 화상상담서비스 UI/UX
                  </span>
                  <span className={styles.portfolio_skill}>
                    <span className={styles.portfolio_skill_item}>
                      #WEBSQUARE
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #CSS
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #JAVASCRIPT
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.cover_group}>
                <div className={styles.cover1}></div>
                <div className={styles.cover2}></div>
              </div>
            </Link>
            <Link>
              <div className={styles.portfolio_box_item} ref={elem => (portParent.current[4] = elem)}>
              <div className={styles.portfolio_border} ref={elem => (portLine.current[4] = elem)}></div>
                <div className={styles.portfolio_text_left} ref={elem => (portLeft.current[4] = elem)}>
                  <span className={styles.portfolio_date}>
                    22.08-23.03
                  </span>
                </div>
                <div className={styles.portfolio_text_right}  ref={elem => (portRight.current[4] = elem)}>
                  <span className={styles.portfolio_title}>
                  마스턴파트너스 국/영문 웹사이트 구축
                  </span>
                  <span className={styles.portfolio_skill}>
                    <span className={styles.portfolio_skill_item}>
                      #HTML
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #CSS
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #JAVASCRIPT
                    </span>
                    <span className={styles.portfolio_skill_item}>
                      #SWIPER.JS
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.cover_group}>
                <div className={styles.cover1}></div>
                <div className={styles.cover2}></div>
              </div>
            </Link>
          </BrowserRouter>
        </div>
        <div className={styles.port_more}>
          
          <BrowserRouter>
            <Link to="https://pear-yarrow-a10.notion.site/PARK-SANG-HO-18142091707e80a9adaff34c940fcbaa?pvs=4" target="_blank">
              <div className={styles.link_button}>
                <span>경력 더보기</span>
                <img src={linkIco} alt="Link ico" />
              </div>
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Section03;
