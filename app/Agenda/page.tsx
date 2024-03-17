import React from "react";
import styles from "../css/Agenda.module.css";
import { Header } from "../components/Header";
import Link from "next/link";
import { GeoNetworkProfile } from "../components/GeoNetworkProfile";
import { Button } from "../components/Button";
import { PreFooterBanner } from "../components/PreFooter";
import { FooterAppComponent } from "../components/Footer";
import { GeorumNetworkGroups } from "../lib/placeholder";

export default function AgendaPage() {
  return (
    <React.Fragment>
      <Header currentIndex={4} />
      <main className={styles.agenda__hero}>
        <section className={styles.agenda__hero__landing}></section>
        <section className={`${styles.agenda__hero__heading} flex`}>
          <div className="flex">
            <h2>Notre Reseau</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus quidem suscipit facere numquam quos eaque repellendus qui autem. Quidem voluptatum sapiente vitae rem alias veritatis quibusdam iusto aperiam perspiciatis.
            </p>
            <div className={`${styles.agenda__hero__heading__filter} flex`}>
            </div>
          </div>
          <div className="flex">
            <h2>Pourquoi rejoindre le reseau ?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus quidem suscipit facere numquam quos eaque repellendus qui autem. Quidem voluptatum sapiente vitae rem alias veritatis quibusdam iusto aperiam perspiciatis.
            </p>
            <div className={`${styles.agenda__hero__heading__filter} flex`}>
            </div>
          </div>
          <div className="flex">
            <h2>Ce qu'il faut savoir</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus quidem suscipit facere numquam quos eaque repellendus qui autem. Quidem voluptatum sapiente vitae rem alias veritatis quibusdam iusto aperiam perspiciatis.
            </p>
            <div className={`${styles.agenda__hero__heading__filter} flex`}>
            </div>
          </div>
        </section>
        <div className={`${styles.filter__action} flex`}>
          <h2>
            <strong>+100</strong> Professionels, <br /> mises en reseaux sur Georum.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia perferendis fugit reiciendis id, perspiciatis obcaecati natus repudiandae quisquam praesentium neque blanditiis laboriosam maxime accusantium ad. Inventore rem iste asperiores?
          </p>
          <div className={`${styles.filter} flex`}>
            <h4>Retrouvez en fonction de : </h4>
            <div className="flex">
              <div className="flex">
                <span>Selecteur 1</span>
                <select name="option_1" id="option_1">
                  <option value="1">Option</option>
                </select>
              </div>
              <div className="flex">
                <span>Selecteur 2</span>
                <select name="option_1" id="option_1">
                  <option value="1">Option</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.georum_network_groups} flex`}>
          {GeorumNetworkGroups.map((object, position) => (
            <GeoNetworkProfile key={position} name={object.name} profile={object.profile} stars_count={Number(object.stars_count)} city={object.city} nationality={object.nationality} email={object.email} phone={Number(object.phone)} social={object.social} />
          ))}
        </div>
        <Button classname={styles.btn_viewer} title="Voir toute la liste" />
        <Link href={"/"} id={styles.join_network_link}>Rejoindre le reseau.</Link>
      </main>
      <PreFooterBanner />
      <FooterAppComponent />
    </React.Fragment>
  );
}
// 698 56 07 70