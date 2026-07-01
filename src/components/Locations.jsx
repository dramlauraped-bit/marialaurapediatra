import { MapPin, NavigationArrow } from "@phosphor-icons/react";
import ScrollReveal from "./ScrollReveal";
import { locations } from "../data/content";
import styles from "./Locations.module.css";

export default function Locations() {
  return (
    <section id="atendimento" className="section" aria-label="Locais de atendimento">
      <div className="container">
        <ScrollReveal as="div" className={styles.header}>
          <h2 className={styles.title}>Locais de atendimento</h2>
          <p className={styles.subtitle}>
            Consultório em duas cidades, para acompanhar a sua família onde
            for mais conveniente.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {locations.map((location, index) => (
            <ScrollReveal
              as="article"
              delay={index * 0.08}
              key={location.name}
              className={styles.card}
            >
              <span className={styles.city}>{location.city}</span>
              <h3 className={styles.name}>{location.name}</h3>
              <p className={styles.address}>
                <MapPin size={18} weight="light" />
                {location.address}, {location.district}
              </p>
              <a
                className={`btn btn-secondary ${styles.cta}`}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location.mapsQuery
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <NavigationArrow size={18} weight="light" />
                Como chegar
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
