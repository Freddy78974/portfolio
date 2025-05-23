import { useRef } from 'react';
import styles from '../src/styles/Contact.module.css';

export default function ContactForm() {
  const formRef = useRef(null);

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
    <section id="contact">
      <div className={styles.contactIntro}>
        <h2>Contactez-moi</h2>
        <p>Envoyez-moi un message pour discuter de collaborations ou simplement dire bonjour !</p>
      </div>
    <div className={styles.contactWrapper}>
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