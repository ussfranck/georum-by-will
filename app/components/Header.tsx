import React from "react";
import styles from "../css/Header.module.css";
import { AppLogo } from "./AppLogo";
import Link from "next/link";
import { Button } from "./Button";
import { noto } from "../lib/fonts";
import { SocialLink } from "./Social";

interface HeaderProps {
  currentIndex: number;
}

const NavLinksList = [
  {
    "name": "Acceuil",
    "target": "/Home"
  },
  {
    "name": "Site",
    "target": "/Site"
  },
  {
    "name": "Métier",
    "target": "/Trade"
  },
  {
    "name": "Ressources",
    "target": "/Ressources"
  },
  {
    "name": "Agenda",
    "target": "/Agenda"
  },
  {
    "name": "A Propos",
    "target": "/about-georum"
  },
  {
    "name": "Contact Us",
    "target": "/Contact"
  },
];

export function Header({ currentIndex }: HeaderProps) {
  return (
    <React.Fragment>
      <header className={`${styles.app_header} ${noto.className} flex`}>
        <AppLogo />
        <SocialLink />
        <Button title="Open Menu." classname={styles.menu_mobile_toggle} />

      </header>
      <nav className={`${styles.app_header_navbar} flex`}>
        <ul className={`${styles.app_header_navbar__links} flex`}>
          {NavLinksList.map((link, index) => (
            <li key={index}>
              <Link href={link.target}
                className={`${styles.app_header_navbar__links_link} 
                                  ${currentIndex === index ? styles.active_link : undefined}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
}