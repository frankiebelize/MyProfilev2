import React from "react";
import styles from "../Contact/contact.module.css";

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.title}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
      <form className={styles.form} onSubmit={sendEmail}>
        <label className={styles.label}>Name</label>
        <input className={styles.input} type="text" name="user_name" />
        <label  className={styles.label}>Email</label>
        <input className={styles.input} type="email" name="user_email" />
        <label  className={styles.label}>Message</label>
        <textarea className={styles.textarea} name="message" />
        <input className={styles.input} type="submit" value="Send" />
      </form>
    </footer>
    )
}