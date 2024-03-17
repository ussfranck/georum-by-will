import React from "react";
import { Header } from "../components/Header";
import styles from "../css/Contact.module.css";
import Link from "next/link";
import Image from "next/image";
import { SocialLink } from "../components/Social";
import { PreFooterBanner } from "../components/PreFooter";
import { FooterAppComponent } from "../components/Footer";

export default function ContactPage() {
  return (
    <React.Fragment>
      <Header currentIndex={6} />
      <main className={styles.contact_hero}>
        <section className={`${styles.contact_hero__landing} flex`}>
          <h1>Get In Touch.</h1>
          <p>
            Maiores debitis delectus dolore quis numquam quia accusamus laboriosam praesentium ipsa explicabo ullam provident autem nam adipisci.
          </p>
        </section>
        <section className={`${styles.contact_containers} grid`}>
          <div className={`${styles.__left} flex`}>
            <h2>Comment Nous Contactez</h2>
            <p>
              <strong>A paragraphe</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima! Nam, libero aperiam.<br />
            </p>
            <p>
              <strong>A paragraphe</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima! Nam<br />
            </p>
            <h3>Our Social</h3>
            <div className="flex">
              <Link href={"/"}>
                <Image src={"/telegram.svg"} alt="Telegran Social Icon" width={32} height={32} />
              </Link>
              <Link href={""}>
                <Image src={"/facebook.svg"} alt="Facebook Social Icon" width={32} height={32} />
              </Link>
              <Link href={""}>
                <Image src={"/linkedin.svg"} alt="Linkedin Social Icon" width={32} height={32} />
              </Link>
              <Link href={""}>
                <Image src={"/mail.svg"} alt="Gmail Box Icon" width={32} height={32} />
              </Link>
            </div>
          </div>
          <div className={`${styles.__right}`}>
            <form className="flex">
              <div className="flex">
                <label htmlFor={"user_name"}>Nom Complet <span title="Important de savoir a qui on parle">*</span></label>
                <input type="text" name={"user_name"} required id="user_name" placeholder="Entrez votre nom" />
              </div>
              <div className="flex">
                <label htmlFor={"user_email"}>Email <span title="Nous contacterons en retour par ici">*</span></label>
                <input type="text" name={"user_email"} required id="user_email" placeholder="Entrez votre email" />
              </div>
              <div className="flex">
                <label htmlFor={"user_city"}>Votre Ville</label>
                <input type="text" name={"user_city"} id="user_city" placeholder="Commme Yaounde, Efoulan" />
              </div>
              <div className="flex">
                <label htmlFor={"user_message"}>Votre Message <span title="Histoire d'etre serieux">*</span></label>
                <textarea name="user_message" required id="user_message" rows={5} placeholder="Dites quelques choses"></textarea>
              </div>
              <button type="submit" className="button primary-button">Envoyez le message</button>
            </form>
          </div>
        </section>
        <section className={`${styles.contact_containers} grid`}>
          <div className={`${styles.__left} flex`}>
            <h2>Ou nous trouvez ?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima! Nam, libero aperiam.<br />
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, minima! Nam<br />
            </p>
          </div>
          <div className={`${styles.__right}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.6979098495312!2d11.51393477515861!3d3.8748154960989827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7badb04b9f%3A0xc52c12f249f4856c!2sH%C3%B4tel%20De%20Ville%20De%20Yaound%C3%A9!5e0!3m2!1sen!2scm!4v1710707813353!5m2!1sen!2scm" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </main>
      <PreFooterBanner />
      <FooterAppComponent />
    </React.Fragment>
  );
}