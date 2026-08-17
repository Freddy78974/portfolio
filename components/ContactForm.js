import { useRef } from 'react';
import styles from '../src/styles/Contact.module.css';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';

export default function ContactForm() {
  const formRef = useRef(null);
  const pdfPath = 'assets/documents/CV.pdf';

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Nouveau message de ${name} via le formulaire de contact`);
    const body = encodeURIComponent(`${message}\n\nVous pouvez me contacter à ${email}`);

    window.location.href = `mailto:nangy.pro@gmail.com?subject=${subject}&body=${body}`;

    // Réinitialiser le formulaire
    setTimeout(() => {
      e.target.reset();
    }, 1000);
  };

  return (
    <section id="contact" className={`${styles.contact} reveal`}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className="eyebrow">prochaine étape</p>
          <h2 className={styles.title}>Contactez-moi</h2>
          <p className={styles.introText}>
            Envoyez-moi un message pour discuter de collaborations, d&apos;une opportunité,
            ou simplement pour dire bonjour.
          </p>
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
            <HiOutlineDocumentArrowDown aria-hidden="true" />
            <span>Télécharger mon CV</span>
          </a>
        </div>

        <form
          ref={formRef}
          id="contact-form"
          data-testid="contact-form"
          className={styles.contactForm}
          onSubmit={handleSubmit}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
