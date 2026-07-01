import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "@phosphor-icons/react";
import ScrollReveal from "./ScrollReveal";
import { articles } from "../data/content";
import styles from "./Blog.module.css";

export default function Blog() {
  const [featured, second, third] = articles;

  return (
    <section id="blog" className={`section section--alt ${styles.blog}`} aria-label="Conteúdo para pais">
      <div className="container">
        <ScrollReveal as="div" className={styles.header}>
          <span className="eyebrow">Para os pais</span>
          <h2 className={styles.title}>Conteúdo para acompanhar o seu filho</h2>
          <p className={styles.subtitle}>
            Textos claros sobre saúde infantil, desenvolvimento, alimentação
            e sono, escritos para o dia a dia da família.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal as="article" className={`${styles.card} ${styles.featured}`}>
            <span className={styles.category}>{featured.category}</span>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.excerpt}>{featured.excerpt}</p>
            <div className={styles.meta}>
              <Clock size={16} weight="light" />
              {featured.readTime}
            </div>
            <Link to={`/blog/${featured.slug}`} className={styles.readMore}>
              Ler artigo <ArrowRight size={16} weight="light" />
            </Link>
          </ScrollReveal>

          {[second, third].map((article, index) => (
            <ScrollReveal as="article" delay={0.08 * (index + 1)} key={article.slug} className={styles.card}>
              <span className={styles.category}>{article.category}</span>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <Link to={`/blog/${article.slug}`} className={styles.readMore}>
                Ler artigo <ArrowRight size={16} weight="light" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.footer}>
          <Link to="/blog" className="btn btn-secondary">
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
