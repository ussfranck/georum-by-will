"use client";
import React from "react";
import styles from "../css/TradePageSM.module.css";
import Link from "next/link";

interface TradePageSimilarViewComponentProps {
  heading: {
    "title": string;
    "review": string;
  };
  childrens: { "name": string, "URLPreview": string, "srcTarget": string }[],
  object_id: string | undefined
};

export const TradePageSimilarViewComponent: React.FC<TradePageSimilarViewComponentProps> = function ({ heading, childrens, object_id }) {
  const ResolveLinkSourceItem = (index: number) => {
    console.info(`\t • Incoming Source Target: ${index}\n`);
  }
  return (
    <div className={`${styles.app_stud_formation_gen} grid`} id={object_id}>
      <div className={`${styles.app_stud_formation_gen__heading} flex`}>
        <h2>{heading.title}</h2>
        <p>{heading.review}</p>
      </div>
      <div className={`${styles.app_stud_formation_gen__content} grid`}>
        {childrens.map((child, index) => (
          <div className="grid" key={index} onClick={() => ResolveLinkSourceItem(index)}>
            <div className={styles.div__header}></div>
            <div className={`${styles.div__footer} flex`}>
              <Link href={"/"}>{child.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}