"use client";
import React from "react";
import styles from "../css/Trade.module.css";
import { Header } from "../components/Header";
import { QuickAccessLinksPanelData, TradePageMissionSectionTabsDataHolder, TradePageViewDataHolder } from "../lib/placeholder";
import Link from "next/link";
import { Button } from "../components/Button";
import { TradePageSimilarViewComponent } from "../components/TradePageSM";
import { PreFooterBanner } from "../components/PreFooter";
import { TradeOveviewCarousel } from "../components/TradeOverviewCarousel";
import { FooterAppComponent } from "../components/Footer";

export default function TradePage() {

  return (
    <React.Fragment>
      <Header currentIndex={2} />
      <main>
        <section className={styles.trade_hero_landing}></section>
        <section className={`${styles.trade_hero__heading} flex`}>
          <h3>La topographie c&apos;est quoi?</h3>
          <div>
            <h2>Le metier de <strong>Geometre topographe</strong> </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia asperiores tenetur;
            </p>
          </div>
        </section>
        <section className={`${styles.trade_hero_landing__main} grid`}>
          <aside className={`${styles.trade_hero_landing__main__aside_panel} flex`}>
            <h2>Sommaire</h2>
            <div className={`${styles.trade_hero_landing__main__aside_panel__links} flex`}>
              {QuickAccessLinksPanelData.map((panelLink, position) => (
                <details key={position}>
                  <summary>{panelLink.title}</summary>
                  <ul className="flex">
                    {panelLink.elements.map((element, index) => (
                      <li key={index}>
                        <Link href={`#${element.targetId}`} title={`Point On #${element.targetId}`}>{element.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </aside>
          <div className={`${styles.trade_hero_landing__main__content} flex`} >
            <div className={`${styles.trade_hero_landing__main__content__profession} grid`}>
              <div className="flex">
                <h2 id={"georum_professions"}>La Profession</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nemo consectetur voluptatem commodi debitis, iste laboriosam quae sunt maiores repudiandae atque ad officia minima quo repellendus dolore blanditiis enim doloremque?</p>
                <Button type="button" handleFunction={() => {}} title="En Savoir Plus." />
              </div>
              <TradeOveviewCarousel />
            </div>
            <div className={`${styles.trade_hero_landing__main__content__uri_mission_side_pannel} flex`}>
              <div className="flex">
                <h2 id={"georum_missions"}>La Missions</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nemo consectetur voluptatem commodi debitis, iste laboriosam quae sunt maiores repudiandae atque ad officia minima quo repellendus dolore blanditiis enim doloremque?</p>
              </div>
              <div className={`${styles.trade_hero_landing__main__content__uri_mission_side_pannel__containers} grid`}>
                {TradePageMissionSectionTabsDataHolder[0].map((data, index) => (
                  <table className="flex" key={index}>
                    <thead><h3>{data.title}</h3></thead>
                    <tbody className="flex">
                      {data.elements.map((element, index) => (
                        <tr key={index}>
                          <td>{element.link} {index}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
                {TradePageMissionSectionTabsDataHolder[1].map((data, index) => (
                  <table className="flex" key={index}>
                    <thead><h3>{data.title}</h3></thead>
                    <tbody className="flex">
                      {data.elements.map((element, index) => (
                        <tr key={index}>
                          <td>{element.link} {index}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
                {TradePageMissionSectionTabsDataHolder[2].map((data, index) => (
                  <table className="flex" key={index}>
                    <thead><h3>{data.title}</h3></thead>
                    <tbody className="flex">
                      {data.elements.map((element, index) => (
                        <tr key={index}>
                          <td>{element.link} {index}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
            <TradePageSimilarViewComponent
              heading={TradePageViewDataHolder[0][0].heading}
              childrens={TradePageViewDataHolder[0][0].childs}
              object_id={"etudes_&_formations"} />
            <TradePageSimilarViewComponent
              heading={TradePageViewDataHolder[1][0].heading}
              childrens={TradePageViewDataHolder[1][0].childs}
              object_id={"qualiter_&_aptitudes"} />
            <TradePageSimilarViewComponent
              heading={TradePageViewDataHolder[2][0].heading}
              childrens={TradePageViewDataHolder[2][0].childs}
              object_id={"georum-collaboration"} />
          </div>
        </section>
        <PreFooterBanner />
      </main>
      <FooterAppComponent />
    </React.Fragment>
  )
}