import { Link } from "react-router-dom";
import { InstagramLogo, Phone } from "@phosphor-icons/react";
import { doctor } from "../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>Maria Laura Almeida</p>
          <p className={styles.tagline}>{doctor.tagline}</p>
        </div>

        <div>
          <p className={styles.heading}>Navegação</p>
          <ul className={styles.list}>
            <li><Link to="/#sobre">Sobre</Link></li>
            <li><Link to="/#servicos">Serviços</Link></li>
            <li><Link to="/#atendimento">Locais de atendimento</Link></li>
            <li><Link to="/blog">Conteúdo para pais</Link></li>
            <li><Link to="/#faq">Perguntas frequentes</Link></li>
          </ul>
        </div>

        <div>
          <p className={styles.heading}>Contato</p>
          <ul className={styles.list}>
            <li>
              <a href={`https://wa.me/${doctor.phoneHref}`} target="_blank" rel="noreferrer">
                <Phone size={16} weight="light" /> {doctor.phone}
              </a>
            </li>
            <li>
              <a href={doctor.instagramHref} target="_blank" rel="noreferrer">
                <InstagramLogo size={16} weight="light" /> {doctor.instagram}
              </a>
            </li>
            <li>
              <Link to="/#agendamento">Agendar consulta</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.heading}>Atendimento</p>
          <ul className={styles.list}>
            <li>Botafogo, Rio de Janeiro</li>
            <li>Coroaci, Minas Gerais</li>
            <li>Telemedicina</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Dra. Maria Laura Almeida. Todos os direitos reservados.</p>
        <p className={styles.crm}>{doctor.crm}</p>
      </div>
    </footer>
  );
}
