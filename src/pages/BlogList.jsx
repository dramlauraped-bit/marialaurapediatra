import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "@phosphor-icons/react";
import ScrollReveal from "../components/ScrollReveal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { articles } from "../data/content";
import styles from "./BlogList.module.css";

export default function BlogList() {
  useDocumentMeta(
    "Conteúdo para pais | Dra. Maria Laura Almeida",
    "Artigos sobre saúde infantil, desenvolvimento, alimentação e sono, escritos pela Dra. Maria Laura Almeida para acompanhar o dia a dia da família."
  );

  return (
    <main className={styles.main}>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.title}>Conteúdo para pais</h1>
          <p className={styles.subtitle}>
            Textos sobre saúde infantil, desenvolvimento, alimentação e sono,
            para apoiar as decisões do dia a dia da família.
          </p>
        </div>
      </section>

      <section className={`section ${styles.list}`}>
        <div className={`container ${styles.grid}`}>
          {articles.map((article, index) => (
            <ScrollReveal
              as="article"
              delay={(index % 3) * 0.06}
              key={article.slug}
              className={styles.card}
            >
              <span className={styles.category}>{article.category}</span>
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <div className={styles.meta}>
                <Clock size={16} weight="light" />
                {article.readTime}
              </div>
              <Link to={`/blog/${article.slug}`} className={styles.readMore}>
                Ler artigo <ArrowRight size={16} weight="light" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
