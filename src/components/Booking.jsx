import { useState } from "react";
import { Phone, InstagramLogo, WhatsappLogo, CalendarPlus } from "@phosphor-icons/react";
import ScrollReveal from "./ScrollReveal";
import { doctor } from "../data/content";
import styles from "./Booking.module.css";

const initialForm = {
  responsibleName: "",
  childName: "",
  age: "",
  phone: "",
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.responsibleName.trim()) nextErrors.responsibleName = "Informe o nome dos responsáveis.";
    if (!form.childName.trim()) nextErrors.childName = "Informe o nome da criança.";
    if (!form.age.trim()) nextErrors.age = "Informe a idade da criança.";
    if (!form.phone.trim()) nextErrors.phone = "Informe um telefone para contato.";
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const text = [
      "Olá! Gostaria de agendar uma consulta.",
      `Responsáveis: ${form.responsibleName}`,
      `Criança: ${form.childName} (${form.age})`,
      `Telefone: ${form.phone}`,
      form.message.trim() ? `Mensagem: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${doctor.phoneHref}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noreferrer"
    );

    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <section id="agendamento" className={`section ${styles.booking}`} aria-label="Agendamento">
      <div className={`container ${styles.grid}`}>
        <ScrollReveal as="div" className={styles.info}>
          <h2 className={styles.title}>Agende uma consulta</h2>
          <p className={styles.subtitle}>
            Fale diretamente pelo WhatsApp ou envie os dados abaixo que
            entramos em contato para confirmar o melhor horário.
          </p>

          <ul className={styles.contactList}>
            <li>
              <Phone size={20} weight="light" />
              {doctor.phone}
            </li>
            <li>
              <InstagramLogo size={20} weight="light" />
              {doctor.instagram}
            </li>
          </ul>

          <div className={styles.actions}>
            <a
              className="btn btn-whatsapp"
              href={`https://wa.me/${doctor.phoneHref}?text=${encodeURIComponent(
                "Olá! Gostaria de agendar uma consulta com a Dra. Maria Laura."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappLogo size={20} weight="fill" />
              Falar no WhatsApp
            </a>
            <a
              className="btn btn-secondary"
              href="#"
              onClick={(event) => event.preventDefault()}
              title="Conecte aqui o link da sua agenda online (Doctoralia, Calendly ou similar)"
            >
              <CalendarPlus size={20} weight="light" />
              Ver agenda online
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal as="form" delay={0.1} className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="responsibleName">Nome dos responsáveis</label>
            <input
              id="responsibleName"
              name="responsibleName"
              type="text"
              autoComplete="name"
              value={form.responsibleName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.responsibleName)}
              aria-describedby={errors.responsibleName ? "error-responsibleName" : undefined}
            />
            {errors.responsibleName && (
              <span id="error-responsibleName" className={styles.error}>
                {errors.responsibleName}
              </span>
            )}
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="childName">Nome da criança</label>
              <input
                id="childName"
                name="childName"
                type="text"
                value={form.childName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.childName)}
                aria-describedby={errors.childName ? "error-childName" : undefined}
              />
              {errors.childName && (
                <span id="error-childName" className={styles.error}>
                  {errors.childName}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="age">Idade</label>
              <input
                id="age"
                name="age"
                type="text"
                value={form.age}
                onChange={handleChange}
                aria-invalid={Boolean(errors.age)}
                aria-describedby={errors.age ? "error-age" : undefined}
              />
              {errors.age && (
                <span id="error-age" className={styles.error}>
                  {errors.age}
                </span>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={form.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "error-phone" : undefined}
            />
            {errors.phone && (
              <span id="error-phone" className={styles.error}>
                {errors.phone}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submit}`}>
            Continuar no WhatsApp
          </button>

          {submitted && (
            <p role="status" className={styles.success}>
              Mensagem pronta. Confirme o envio na aba do WhatsApp que abriu.
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
