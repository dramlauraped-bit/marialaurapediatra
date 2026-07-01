import {
  Stethoscope,
  Baby,
  ChartLineUp,
  Carrot,
  MoonStars,
  BowlSteam,
  ShieldCheck,
  VideoCamera,
} from "@phosphor-icons/react";
import ScrollReveal from "./ScrollReveal";
import { DottedDivider } from "./Decorative";
import { services } from "../data/content";
import styles from "./Services.module.css";

const ICONS = {
  Stethoscope,
  Baby,
  ChartLineUp,
  Carrot,
  MoonStars,
  BowlSteam,
  ShieldCheck,
  VideoCamera,
};

export default function Services() {
  return (
    <section id="servicos" className={`section section--alt ${styles.services}`} aria-label="Serviços">
      <div className="container">
        <ScrollReveal as="div" className={styles.header}>
          <span className="eyebrow">Cuidado completo</span>
          <h2 className={styles.title}>O que a Dra. Maria Laura oferece</h2>
          <p className={styles.subtitle}>
            Serviços pensados para acompanhar o seu filho em cada etapa,
            com orientação clara para toda a família.
          </p>
          <DottedDivider className={styles.divider} />
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <ScrollReveal
                as="article"
                delay={(index % 4) * 0.05}
                key={service.slug}
                className={`${styles.card} ${index % 2 === 0 ? styles.cardSage : styles.cardBlush}`}
              >
                <span className={styles.iconWrap}>
                  <Icon size={26} weight="light" />
                </span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
