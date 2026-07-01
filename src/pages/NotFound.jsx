import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useDocumentMeta("Página não encontrada | Dra. Maria Laura Almeida", undefined);

  return (
    <main className={`container ${styles.main}`}>
      <h1 className={styles.title}>Página não encontrada</h1>
      <p className={styles.text}>
        A página que você procura não existe ou foi movida.
      </p>
      <Link to="/" className="btn btn-primary">
        Voltar para o início
      </Link>
    </main>
  );
}
