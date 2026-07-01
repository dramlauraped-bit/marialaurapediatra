import { Buildings } from "@phosphor-icons/react";
import ScrollReveal from "./ScrollReveal";
import { hospitals } from "../data/content";
import styles from "./Hospitals.module.css";

export default function Hospitals() {
  return (
    <section className={styles.band} aria-label="Atuação hospitalar">
      <div className={`container ${styles.inner}`}>
        <ScrollReveal as="div" className={styles.copy}>
          <h2 className={styles.title}>Atuação hospitalar</h2>
          <p className={styles.subtitle}>
            Além do consultório, Dra. Maria Laura atua em hospitais de
            referência no atendimento pediátrico.
          </p>
        </ScrollReveal>

        <ul className={styles.list}>
          {hospitals.map((hospital, index) => (
            <ScrollReveal as="li" delay={index * 0.08} key={hospital} className={styles.item}>
              <Buildings size={22} weight="light" />
              <span>{hospital}</span>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
