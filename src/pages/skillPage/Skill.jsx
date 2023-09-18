import React from 'react';
import styles from './Skill.module.css';

const Skill = () => {
  return (
    <>
        <div className={styles.my_skills}>
            <div className={styles.technical_skill}>
                <h1>Technical Skills</h1>
                <div className={styles.skill}>
                  <h4>Python</h4>
                  <div className={styles.border_line}><div className={styles.border}></div></div>
                  <p>90%</p>
                  <h4>C(Programming Language)</h4>
                  <div className={styles.border_line}><div className={styles.border1}></div></div>
                  <p>20%</p>
                  <h4>JavaScript</h4>
                  <div className={styles.border_line}><div className={styles.border2}></div></div>
                  <p>70%</p>
                  <h4>React js</h4>
                  <div className={styles.border_line}><div className={styles.border3}></div></div>
                  <p>75%</p>
                </div>
            </div>
            <div className={styles.professional_skill}>
                <h1>Professional Skills</h1>
                <div className={styles.skill}>
                  <h4>Creativity</h4>
                  <div className={styles.border_line}><div className={styles.line}></div></div>
                  <p>85%</p>
                  <h4>Communication</h4>
                  <div className={styles.border_line}><div className={styles.line1}></div></div>
                  <p>65%</p>
                  <h4>Problem Solving</h4>
                  <div className={styles.border_line}><div className={styles.line2}></div></div>
                  <p>75%</p>
                  <h4>Team Work</h4>
                  <div className={styles.border_line}><div className={styles.line3}></div></div>
                  <p>70%</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skill;