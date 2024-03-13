import Link from "next/link";
import styles from "../css/GS_Wizard.module.css";
import { Button } from "./Button";

export function GetStartedWizard() {
  return (
    <section className={styles.geometric_embark}>
      <h3 className={styles.geometric_embark_title}>Embark on Your Geomatics Journey.</h3>
      <div className={`${styles.geometric_embark__heading} flex`}>
        <h2 className={styles.geometric_embark__heading_title}>How to Begin? Choose from the Options Below.</h2>
        <p className={styles.geometric_embark__heading_desc}>
          We guide you through the process, ensuring accuracy and reliability in every survey and geomatics service we provide.
        </p>
      </div>
      <div className={`${styles.geometric_embark__containers} grid`}>
        <div className={styles.geometric_embark__containers__tile}>
          <div className={styles.geometric_embark__containers_card}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            <div className={styles.geometric_embark__containers_card__content}>
              <p className={styles.geometric_embark__containers_card_title}>Card Title</p>
              <p className={styles.geometric_embark__containers_card_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <p className={styles.geometric_embark__containers_card_desc}>Explore new opportunities and enhance your geomatics expertise.</p>
            </div>
          </div>
          <h2 className={styles.geometric_embark__containers_card_subtitle}>Continue as a Professional Surveyor.</h2>
          <p className={styles.geometric_embark__containers_card_subdesc}>Explore new opportunities and enhance your geomatics expertise.</p>
          <div className={`${styles.geometric_embark__containers__tile__btns} flex`}>
            <Button title="Register Now" />
            <Link href={"/"}>Need more information?</Link>
          </div>
        </div>
        <div className={styles.geometric_embark__containers__tile}>
          <div className={styles.geometric_embark__containers_card}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            <div className={styles.geometric_embark__containers_card__content}>
              <p className={styles.geometric_embark__containers_card_title}>Card Title</p>
              <p className={styles.geometric_embark__containers_card_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <p className={styles.geometric_embark__containers_card_desc}>Explore new opportunities and enhance your geomatics expertise.</p>
            </div>
          </div>
          <h2 className={styles.geometric_embark__containers_card_subtitle}>Continue as a Client</h2>
          <p className={styles.geometric_embark__containers_card_subdesc}>Access our surveying services and explore project possibilities.</p>
          <div className={`${styles.geometric_embark__containers__tile__btns} flex`}>
            <Button title="Register Now" />
            <Link href={"/"}>View Our Shedule.</Link>
          </div>
        </div>
      </div>
    </section>
  );
}