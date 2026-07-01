import { WhatsappLogo } from "@phosphor-icons/react";
import { doctor } from "../data/content";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      className={styles.float}
      href={`https://wa.me/${doctor.phoneHref}?text=${encodeURIComponent(
        "Olá! Gostaria de agendar uma consulta com a Dra. Maria Laura."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp para agendar consulta"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
