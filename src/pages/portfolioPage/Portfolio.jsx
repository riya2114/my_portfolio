import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import photo from './images/my-image.jpeg';

const Portfolio = () => {
  const [resume,setResume]= useState("");
  const myResume = () => {
    setResume("https://drive.google.com/file/d/17zr2J5phUMT9JhWEzi1070-JPICBUT0X/view");
    window.open("https://drive.google.com/file/d/17zr2J5phUMT9JhWEzi1070-JPICBUT0X/view");
  };
  return (
    <>
        <div className={styles.portfolioParent}>
           <div className={styles.aboutMe}>
            <h4 className={styles.Me}>Hello, It's Me <br/>
            <span className={styles.name}>Riya Gautam</span> <br/>
            <span>And I'm a Student</span></h4>
            <p className={styles.para}>Now, I am a Fresher. I am Working Projects Like Some Web Design, 
            Frontend Design And Many More.</p>
            <div className={styles.resume}>
            <button onClick={myResume}>Resume</button>
            
           </div>
           </div>
           <div className={styles.image}>
             <img src={photo} alt='my image' className={styles.itsMe}/>
           </div>
        </div>

    </>
  )
}

export default Portfolio;