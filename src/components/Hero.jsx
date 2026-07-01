import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero} aria-label="Apresentação">
        <img
          className={styles.background}
          src="/images/dra-maria-laura-hero.png"
          alt="Dra. Maria Laura Almeida, pediatra, sorrindo em ambiente acolhedor"
          fetchpriority="high"
        />
        <div className={styles.overlay} aria-hidden="true" />

        <div className={`container ${styles.grid}`}>
          <ScrollReveal as="div" className={styles.copy}>
            <h1 className={styles.title}>
              Cuidando com amor do seu bem mais precioso
            </h1>
            <div className={styles.actions}>
              <Link to="/#agendamento" className="btn btn-primary">
                Agendar consulta
              </Link>
              <Link to="/#sobre" className={`btn ${styles.btnOnPhoto}`}>
                Conheça a Dra. Maria Laura
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className={`container ${styles.subtitleWrap}`}>
        <p className={styles.subtitle}>
          Atendimento pediátrico humanizado para acompanhar cada fase do
          desenvolvimento do seu filho.
        </p>
      </div>
    </>
  );
}
