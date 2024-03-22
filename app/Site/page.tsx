"use client";
import React from "react";
import { Header } from "../components/Header";
import styles from "../css/Site.module.css";
import { ReleaseSiteProducts } from "../lib/placeholder";
import { Button } from "../components/Button";
import Link from "next/link";
import { PreFooterBanner } from "../components/PreFooter";
import { FooterAppComponent } from "../components/Footer";

export default function SitePage() {
  return (
    <React.Fragment>
      <Header currentIndex={1} />
      <main>
        <section className={styles.ste_hero_landing}></section>
        <section className={`${styles.ste_hero_landing__introduction} flex`}>
          <h3 className={styles.ste_hero_landing__introduction_tile}>Introduction MySelf.</h3>
          <div className={`${styles.ste_hero_landing__introduction__heading} flex`}>
            <h2 className={styles.ste_hero_landing__introduction__heading_title}>Introduction Title</h2>
            <p className={styles.ste_hero_landing__introduction__heading_desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia asperiores tenetur;
            </p>
          </div>
          <div className={`${styles.ste__hero__containers} grid`}>
            {ReleaseSiteProducts[0].map((categories, positon) => (
              <div key={positon} className={`${styles.ste__hero__containers_card} flex`}>
                <div className={`${styles.ste__hero__containers_card_heading} flex`}>
                  <h4 className={styles.ste__hero__containers_card_heading_title}>{categories.title}</h4>
                  <p>sit amet consectetur adipisicing elit.</p>
                </div>
                <ul className={`${styles.ste__hero__containers_card__items} flex`}>
                  {categories.contents.map((tile: string, position: number) => (
                    <li key={position} className={`${styles.ste__hero__containers_card__items_item} flex`}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                        <path d="m11.5,6c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-6-3c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm17.736,10.015l-6.805,7.637c-1.896,2.128-4.617,3.348-7.466,3.348h-4.965c-2.206,0-4-1.794-4-4v-5c0-2.206,1.794-4,4-4h8.858c1.139,0,2.138.609,2.689,1.518l3.216-3.534c.542-.595,1.282-.944,2.086-.981.808-.042,1.574.24,2.168.782,1.214,1.107,1.312,3.004.219,4.229Zm-1.566-2.751c-.199-.182-.459-.267-.728-.262-.27.013-.518.129-.7.329l-4.426,4.864c-.385,1.071-1.339,1.891-2.514,2.059l-5.161.737c-.545.079-1.053-.301-1.131-.848-.078-.547.302-1.053.848-1.131l5.161-.737c.559-.08.981-.566.981-1.131,0-.63-.512-1.142-1.142-1.142H4c-1.103,0-2,.897-2,2v5c0,1.103.897,2,2,2h4.965c2.279,0,4.457-.976,5.973-2.678l6.805-7.638c.367-.412.334-1.049-.073-1.421Zm-15.96-1.422c.167.107.354.159.54.159.329,0,.651-.162.842-.459L11.591,1.541c.298-.464.164-1.083-.301-1.382-.463-.299-1.083-.164-1.382.301l-4.5,7c-.298.464-.164,1.083.301,1.382Z" />
                      </svg>
                      <span>{tile}</span>
                    </li>
                  ))}
                </ul>
                <div className={`${styles.ste__hero__containers_card__buttons} flex`}>
                  <Button type="link" title="Contact Us." />
                  <Link href={categories.flagId}>Obtenir un devis.</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={`${styles.ste_hero_landing__introduction} flex`}>
          <h3 className={styles.ste_hero_landing__introduction_tile}>Formation Reviews.</h3>
          <div className={`${styles.ste_hero_landing__introduction__heading} flex`}>
            <h2 className={styles.ste_hero_landing__introduction__heading_title}>Formation Tile</h2>
            <p className={styles.ste_hero_landing__introduction__heading_desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia asperiores tenetur;
            </p>
          </div>
          <div className={`${styles.ste__hero__containers} grid`}>
            {ReleaseSiteProducts[1].map((categories, positon) => (
              <div key={positon} className={`${styles.ste__hero__containers_card} flex`}>
                <div className={`${styles.ste__hero__containers_card_heading} flex`}>
                  <h4 className={styles.ste__hero__containers_card_heading_title}>{categories.title}</h4>
                  <p>sit amet consectetur adipisicing elit.</p>
                </div>
                <ul className={`${styles.ste__hero__containers_card__items} flex`}>
                  {categories.contents.map((tile, position) => (
                    <li key={position} className={`${styles.ste__hero__containers_card__items_item} flex`}>
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                        <path d="m11.5,6c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-6-3c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm17.736,10.015l-6.805,7.637c-1.896,2.128-4.617,3.348-7.466,3.348h-4.965c-2.206,0-4-1.794-4-4v-5c0-2.206,1.794-4,4-4h8.858c1.139,0,2.138.609,2.689,1.518l3.216-3.534c.542-.595,1.282-.944,2.086-.981.808-.042,1.574.24,2.168.782,1.214,1.107,1.312,3.004.219,4.229Zm-1.566-2.751c-.199-.182-.459-.267-.728-.262-.27.013-.518.129-.7.329l-4.426,4.864c-.385,1.071-1.339,1.891-2.514,2.059l-5.161.737c-.545.079-1.053-.301-1.131-.848-.078-.547.302-1.053.848-1.131l5.161-.737c.559-.08.981-.566.981-1.131,0-.63-.512-1.142-1.142-1.142H4c-1.103,0-2,.897-2,2v5c0,1.103.897,2,2,2h4.965c2.279,0,4.457-.976,5.973-2.678l6.805-7.638c.367-.412.334-1.049-.073-1.421Zm-15.96-1.422c.167.107.354.159.54.159.329,0,.651-.162.842-.459L11.591,1.541c.298-.464.164-1.083-.301-1.382-.463-.299-1.083-.164-1.382.301l-4.5,7c-.298.464-.164,1.083.301,1.382Z" />
                      </svg>
                      <span>{tile}</span>
                    </li>
                  ))}
                </ul>
                <div className={`${styles.ste__hero__containers_card__buttons} flex`}>
                  <Button type="link" title="Contact Us." />
                  <Link href={categories.flagId}>Obtenir un devis.</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className={`${styles.banner_overview} flex`}>
          <h2>Sur un tot de </h2>
          <div className={"flex"}>
            <div className="flex">
              <strong>+20</strong>
              <span>Client Satisfait</span>
            </div>
            <div className="flex">
              <strong>22 %</strong>
              <span>Client Satisfait</span>
            </div>
            <div className="flex">
              <strong>+50</strong>
              <span>Document concu.</span>
            </div>
            <div className="flex">
              <strong>+10</strong>
              <span>Cafe acheter.</span>
            </div>
          </div>
        </div>
        <section className={`${styles.ste_hero_landing__introduction} flex`}>
          <h3 className={styles.ste_hero_landing__introduction_tile}>Product Interesting.</h3>
          <div className={`${styles.ste_hero_landing__introduction__heading} flex`}>
            <h2 className={styles.ste_hero_landing__introduction__heading_title}>Interesting Ressource Tile</h2>
            <p className={styles.ste_hero_landing__introduction__heading_desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia asperiores tenetur;
            </p>
          </div>
          <div className={`${styles.ste__hero__containers} grid`}>
            {
              ReleaseSiteProducts[2].map((categories, position) => (
                <div key={position} className={`${styles.ste__hero__containers_card} flex`}>
                  <div className={`${styles.ste__hero__containers_card_heading} flex`}>
                    <h4 className={styles.ste__hero__containers_card_heading_title}>{categories.title}</h4>
                    <p>{categories.description}</p>
                  </div>
                  <ul className={`${styles.ste__hero__containers_card__items} flex`}>
                    {categories.contents.map((tile, position) => (
                      <li key={position} className={`${styles.ste__hero__containers_card__items_item} flex`}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                          <path d="m22.576,12.52L13.849,3.85c-.842-.835-2.046-1.243-3.221-1.09l-5.803.651L1.707.293C1.316-.098.684-.098.293.293S-.098,1.316.293,1.707l3.118,3.118-.696,6.088c-.091,1.142.323,2.258,1.136,3.062l8.713,8.645c.91.906,2.118,1.404,3.4,1.404h.02c1.29-.005,2.5-.513,3.408-1.431l3.21-3.242c1.87-1.89,1.859-4.955-.025-6.832Zm-1.396,5.426l-3.21,3.242c-.531.537-1.239.834-1.994.837h-.011c-.751,0-1.458-.292-1.992-.823L5.259,12.555c-.394-.39-.594-.93-.554-1.449l.512-4.474,1.857,1.857c-.044.164-.074.334-.074.512,0,1.105.895,2,2,2s2-.895,2-2-.895-2-2-2c-.178,0-.347.031-.512.074l-1.854-1.854,4.226-.474.021-.003c.568-.075,1.151.122,1.559.525l8.726,8.668c1.105,1.102,1.112,2.899.015,4.009Zm-3.974-5.151c-.391-.391-1.023-.391-1.414,0l-3,3c-.391.391-.391,1.023,0,1.414l2.5,2.5c.195.195.451.293.707.293s.512-.098.707-.293l3-3c.391-.391.391-1.023,0-1.414l-2.5-2.5Zm-1.207,4.793l-1.086-1.086,1.586-1.586,1.086,1.086-1.586,1.586Z" />
                        </svg>

                        <span>{tile}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`${styles.ste__hero__containers_card__buttons} flex`}>
                    <Button type="link" title="Voir Plus." />
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <PreFooterBanner />
      </main>
      <FooterAppComponent />
    </React.Fragment>
  );
}