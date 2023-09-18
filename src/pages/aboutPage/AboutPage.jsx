import React, { useEffect, useState } from 'react';
import styles from './AboutPage.module.css';
import image from './images/my-image.jpeg';

const AboutPage = () => {
  
 
  return (
    <>
        <div className={styles.aboutParent}>
            <div className={styles.aboutImage}>
              <img src={image} alt='my image' />
            </div>
            <div className={styles.myDetails}>
                <h1>About<span className={styles.about}>Me</span></h1>
                <h4>Frontend Developer!</h4>
                <p>Passionate to learn new web technologies and frameworks. And I studied from Delhi Skill and Entrepreneurship University(DSEU), 
                actively seeking an entry-level role to contribute my proficiency in Python3, HTML5, C(basic), CSS3, Javascript and 
                React Js. With hands on project experience showcased in my Github repository. I am quick learning in real-world 
                challenges. Aim to merge my technical skills with creativity. I am self-learner</p>
            </div>
        </div>
    </>
  )
}

export default AboutPage;