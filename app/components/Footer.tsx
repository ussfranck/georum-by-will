import Link from "next/link";
import { AppLogo } from "./AppLogo";

export const FooterAppComponent = () => {
  return (
    <footer className="app-footer grid">
      <div className="app-footer-heading flex">
        <AppLogo titleStyle={{color: "white"}} svgStyle={{fill: "white", stroke: "white"}}/>
        <div className="app-footer-heading__links flex">
          <div className="flex">
            <a href="/" className="active">Acceuil</a>
            <a href="/introduction">Presentation</a>
          </div>
          <div className="flex">
            <a href="/georum_professionals">Métier de Géomètre Topographe</a>
            <a href="/georum-agenda">Agenda des Géomètres Topographes </a>
          </div>
          <div className="flex">
            <a href="/about-georum">A propos</a>
            <a href="tel+0237693929025" title="Disponible sur WhatsApp">0237 693 929 025</a>
          </div>
          <div className="flex">
            <a href="mailto:tankewilfried32@gmail.com">Email: tankewilfried32@gmail.com</a>
            <a href="/georum-ressources">Ressources</a>
          </div>
        </div>
      </div>
      <div className="app-footer-subheading flex">
        <div className="app-footer-subheading__links flex">
          <Link href="/legal-metions">Mentions légales</Link>
          <Link href="/politics-cookies">Politique en matière de cookies</Link>
          <Link href="/terms-contract">Politique de confidentialité</Link>
          <Link href="/politics-usage">Conditions d&apos;utilisation</Link>
        </div>
        <strong>&copy;2035 Par Mr Will — All right reserved</strong>
      </div>
    </footer>
  );
};