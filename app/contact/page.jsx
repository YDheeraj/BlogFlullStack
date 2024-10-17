"use client";
import React from 'react';
import styles from "./contact.module.css";
import { useRef, useState } from 'react';
import Image from 'next/image';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vd3dr6', 'template_4asow5n', form.current, 'UFpVZMDYHi-j5inpm')
      .then((result) => {
        alert("message send successfully")
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.contactSection}>
        <h2 className={styles.sectionHeading}>Contact Us</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactColumn}>
            <h5 className={styles.textLight}>
              Looking for your AI partner? <br />
              Reach us at <br />
              <a href="mailto:sales@celeb-ai.com">sales@celeb-ai.com</a>
            </h5>
          </div>
          <div className={styles.contactColumn}>
            <h5 className={styles.textLight}>
              Looking to join us? <br />
              Reach us at <br />
              <a href="mailto:hr@celeb-ai.com">hr@celeb-ai.com</a>
            </h5>
          </div>
          <div className={styles.contactColumn}>
            <h5 className={styles.textLight}>
              Looking for other info? <br />
              Reach us at <br />
              <a href="mailto:info@celeb-ai.com">info@celeb-ai.com</a>
            </h5>
          </div>
        </div>
        <div className={styles.addressSection}>
          <div className={styles.addressColumn}>
            <h5 className={styles.textLight}>
              Delhi <br />
              B1/H3, Mohan Co-Operative Industrial Area, <br />
              Mathura Road, Block B, <br />
              Delhi-110044
            </h5>
          </div>
          <div className={styles.addressColumn}>
            <h5 className={styles.textLight}>
              Delhi <br />
              First Floor, B-1 Extension, FB, <br />
              Mohan Cooperative Industrial Estate, New Delhi, <br />
              Delhi-110044
            </h5>
          </div>
          <div className={styles.addressColumn}>
            <h5 className={styles.textLight}>
              Hyderabad <br />
              2-41/11/6/2, Mytri Square, <br />
              Kondapur, Hyderabad, <br />
              Telangana-500084
            </h5>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.left}>
            <Image alt="contact-us" src="/contactus.jpg" width={500} height={300} />
          </div>
          <div className={styles.right}>
            <h2>Send your message</h2>
            <div className={styles.formContainer}>
              <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <textarea
                  placeholder="Enter your message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                />
                <button type="submit" value="send" className="button">
                  <span></span> Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
