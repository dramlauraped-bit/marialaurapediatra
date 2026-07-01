import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock } from "@phosphor-icons/react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { articles } from "../data/content";
import styles from "./BlogPost.module.css";

export default function BlogPost() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  useDocumentMeta(
    article ? `${article.title} | Dra. Maria Laura Almeida` : undefined,
    article ? article.excerpt : undefined
  );

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className={styles.main}>
      <article className={`container ${styles.article}`}>
        <Link to="/blog" className={styles.back}>
          <ArrowLeft size={16} weight="light" />
          Voltar para o conteúdo para pais
        </Link>

        <span className={styles.category}>{article.category}</span>
        <h1 className={styles.title}>{article.title}</h1>

        <div className={styles.meta}>
          <Clock size={16} weight="light" />
          {article.readTime}
        </div>

        <div className={styles.body}>
          {article.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Quer conversar sobre a saúde do seu filho com a Dra. Maria Laura?
          </p>
          <Link to="/#agendamento" className="btn btn-primary">
            Agendar consulta
          </Link>
        </div>
      </article>
    </main>
  );
}
