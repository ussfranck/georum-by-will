"use client";

import { useRef, useEffect } from "react";
import styles from "../css/TradeOverviewCarousel.module.css";
import Siema from "siema";


export const TradeOveviewCarousel = () => {
  const siemaRef = useRef<HTMLDivElement | null>(null);
  // const paginationsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (siemaRef.current) {
      const siema = new Siema({
        selector: siemaRef.current,
        loop: true,
        easing: "linear"
      });
      // generate pagniation...
      setInterval(() => {
        siema.goTo(siema.currentSlide + 1);
      }, 4100);
      return () => {
        siema.destroy(true);
      };
    }
  }, []);

  return (
    <div className={styles.trade_overviewCarousel}>
      <div className={styles.trade_overviewCarousel__scene} ref={siemaRef}>
        <div className={styles.trade_overviewCarousel__scene_slide} id={styles.trade_slide_0}>1</div>
        <div className={styles.trade_overviewCarousel__scene_slide} id={styles.trade_slide_1}>2</div>
        <div className={styles.trade_overviewCarousel__scene_slide} id={styles.trade_slide_3}>3</div>
      </div>
      {/* <div className={`${styles.trade_overviewCarousel__pagination} flex`} ref={paginationsRef}></div> */}
    </div>
  );
};