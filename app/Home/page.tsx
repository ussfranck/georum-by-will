"use client";
import React from "react";
import { Header } from "../components/Header";
import styles from "../css/Home.module.css";
import { Button } from "../components/Button";
import { ReleasePressInfos } from "../lib/placeholder";
import { GetStartedWizard } from "../components/GetStartedWizard";
import { PreFooterBanner } from "../components/PreFooter";
import { FooterAppComponent } from "../components/Footer";

export default function HomePage() {

  return (
    <React.Fragment>
      <Header currentIndex={0} />
      <main>
        <section className={styles.home_hero}>
          <div className={styles.home_hero__reviews}>
            <h1 className={styles.home_hero__reviews_title}>Georum,</h1>
            <p className={styles.home_hero__reviews_desc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At magni cumque, vero,
              obcaecati eum iste, illum excepturi sed ipsa voluptate cupiditate. Consectetur, exercitationem.
              Vel, ipsa! Maxime officiis libero quas nam.
            </p>
            <p className={styles.home_hero__reviews_desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At magni cumque, vero, </p>
          </div>
          <div className={`${styles.home_hero__banner} flex`}>
            <h2 className={styles.home_hero__banner__title}>
              Your Trusted Geomatics Partner. Precision You Can Rely On.
            </h2>
            <p className={styles.home_hero__banner__desc}>
              We understand the importance of precision in every detail. <br />
              That&apos;s why we collaborate closely with surveyors to meet your specific needs
            </p>
            <div className={`${styles.home_hero__banner__buttons} flex`}>
              <Button type="link" title="Start The Conversation" icon={
                <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512">
                  <path d="M6.079,22.5a1.5,1.5,0,0,1,.44-1.06l7.672-7.672a2.5,2.5,0,0,0,0-3.536L6.529,2.565A1.5,1.5,0,0,1,8.65.444l7.662,7.661a5.506,5.506,0,0,1,0,7.779L8.64,23.556A1.5,1.5,0,0,1,6.079,22.5Z" />
                </svg>
              } />
              <Button type="link" title="Apply Now" />
            </div>
          </div>
        </section>
        <section className={styles.press_release}>
          <h3 className={styles.press_release__title}>Press release</h3>
          <div className={`${styles.press_release__infos} grid`}>
            {ReleasePressInfos.map((info, index) => (
              <div className={styles.press_release__infos_card} key={index}>
                <a className={styles.press__release__infos_card_1} href="#">
                  <p className={styles.press__release__infos_card_1_title}>{info.title}</p>
                  <p className={styles.press__release__infos_card_1_review}>{info.review}</p>
                  <div className={styles.press__release__infos_card_1_corner}>
                    <div className={styles.press__release__infos_card_1_corner_arrow}>
                      →
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
        <GetStartedWizard />
        <PreFooterBanner />
      </main>
      <FooterAppComponent />
    </React.Fragment>
  );
}