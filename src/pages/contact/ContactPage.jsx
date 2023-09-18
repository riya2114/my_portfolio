import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <>
        <div className={styles.contact_parent}>
            <div className={styles.paragraph}>
                <h1 className={styles.heading}>Contact Me</h1>
                <h5>Let's Work Together</h5>
                <p>Lorem ipsum dolor sit amet consectetur adispicing elit. Exercitationem in sed, aliquid molestias 
                perspicialists expedita aperiam magnam qui repelinedus nobis enim p erferendis odio vel laboriosam
                consectetur dolores autem repellat natus!</p>
            </div>
            <div className={styles.message}>
                <div className={styles.input_text}>
                    <input type='text' placeholder='Enter Your Name' required/>
                </div>
                <div className={styles.input_text}>
                    <input type='email' placeholder='Enter Your Email' required/>
                </div>
                <div className={styles.input_text}>
                    <input type='text' placeholder='Enter Your Subject' required/>
                </div>
                <div>
                    <input type='text' placeholder='Enter Your Message' className={styles.input_message} required/>
                </div>
                <div className={styles.submit_button}>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage;