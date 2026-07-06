import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import ScrollReveal from "./ScrollReveal";
import { faq } from "../data/content";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section" aria-label="Perguntas frequentes">
      <div className={`container ${styles.wrapper}`}>
        <ScrollReveal as="div" className={styles.header}>
          <h2 className={styles.title}>Perguntas frequentes</h2>
          <p className={styles.subtitle}>
            As dúvidas mais comuns dos pais antes da primeira consulta.
          </p>
        </ScrollReveal>

        <div className={styles.list}>
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div className={styles.item} key={item.question}>
                <h3 className={styles.questionHeading}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {item.question}
                    <CaretDown
                      size={18}
                      weight="light"
                      className={`${styles.caret} ${isOpen ? styles.caretOpen : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
