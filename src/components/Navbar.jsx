import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          Maria Laura Almeida
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/#agendamento" className={`btn btn-primary ${styles.ctaDesktop}`}>
          Agendar consulta
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav} aria-label="Navegação mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#agendamento"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            Agendar consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}
