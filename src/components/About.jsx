import ScrollReveal from "./ScrollReveal";
import { HeartStraight, NotePencil, Sparkle } from "@phosphor-icons/react";
import { timeline, differentiators } from "../data/content";
import { SoftBlob, LeafMotif } from "./Decorative";
import styles from "./About.module.css";

const ICONS = { HeartStraight, NotePencil, Sparkle };

export default function About() {
  return (
    <section id="sobre" className={`section ${styles.about}`} aria-label="Sobre a Dra. Maria Laura">
      <div className={`container ${styles.grid}`}>
        <ScrollReveal as="div" className={styles.visual}>
          <SoftBlob className={styles.blob} tone="blush" />
          <img
            src="/images/dra-maria-laura-sobre.jpeg"
            width="720"
            height="860"
            alt="Dra. Maria Laura Almeida atendendo em consultório"
            loading="lazy"
            className={styles.photo}
          />
          <LeafMotif className={styles.leaf} />
        </ScrollReveal>

        <div>
          <ScrollReveal as="div">
            <span className="eyebrow">Trajetória</span>
            <h2 className={styles.title}>Sobre a Dra. Maria Laura</h2>
            <p className={styles.lead}>
              Formada pela Universidade Federal do Sul da Bahia e com
              residência médica pelo Hospital Federal de Bonsucesso, Dra.
              Maria Laura dedica sua atuação ao cuidado integral da saúde
              infantil, acompanhando crianças e famílias com atenção, escuta
              e acolhimento.
            </p>
          </ScrollReveal>

          <ol className={styles.timeline}>
            {timeline.map((item, index) => (
              <ScrollReveal as="li" delay={index * 0.06} key={item.title} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{item.year}</span>
                <p className={styles.timelineTitle}>{item.title}</p>
                <p className={styles.timelineDesc}>{item.description}</p>
              </ScrollReveal>
            ))}
          </ol>

          <ul className={styles.differentiators}>
            {differentiators.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <li key={item.title} className={styles.differentiator}>
                  <Icon size={22} weight="light" className={styles.differentiatorIcon} />
                  <div>
                    <p className={styles.differentiatorTitle}>{item.title}</p>
                    <p className={styles.differentiatorDesc}>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
