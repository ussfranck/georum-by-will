import React from "react";
import styles from "./css/Introduction.module.css";
import { Button } from "./components/Button";
import { AppLogo } from "./components/AppLogo";

export default function Home() {

  const initializeLocalStorageOnConfirm = function (factor: "client" | "pro") {
    // logic's
    if (factor === "pro") {
      // Local storage configs
      return true;
    } else {
      return false;
    }
  }

  return (
    <React.Fragment>
      <section className={`${styles.introduction_hero} flex`}>
        <AppLogo/>
        <div className={`${styles.introduction_hero__heading} flex`}>
          <h1>Bienvenu sur Georum.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem, assumenda soluta error architecto inventore ipsum itaque sed, delectus non adipisci. Itaque tenetur assumenda libero expedita facilis, at officia quae!
          </p>
        </div>
        <div className={`${styles.introduction_hero__content} grid`}>
          <div className={`flex`}>
            <h2>Je suis un Client</h2>
            <p>
              Itaque tenetur assumenda libero expedita facilis, at officia quae!  Suscipit exercitationem, assumenda soluta error architecto
            </p>
            <p>sit amet consectetur adipisicing elit.</p>
            <Button title="Je suis un Client." type="button" />
          </div>
          <div className={`flex`}>
            <h2>Je suis un professionel</h2>
            <p>
              Itaque tenetur assumenda libero expedita facilis, at officia quae!  Suscipit exercitationem, assumenda soluta error architecto
            </p>
            <p>sit amet consectetur adipisicing elit.</p>
            <Button title="Je suis Professionel." handleFunction={() => initializeLocalStorageOnConfirm("pro")} type="button" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
