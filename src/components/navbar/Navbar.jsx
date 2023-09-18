import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [git, setGit] = useState("");

  const myGithub = () =>{
    setGit("https://github.com/riya2114?tab=repositories");
    window.open("https://github.com/riya2114?tab=repositories");
  }
  return (
    <>
       <div className={styles.navbar}>
            <div className={styles.heading}>Portfolio</div>
            <div className={styles.github}>
              <button onClick={myGithub}>Github</button>
            </div>
                <div className={styles.detail}>
                  <div>
                  <Link to="/" className={styles.content}>HOME</Link>
                  </div>
                  <div>
                  <Link to="/about" className={styles.content}>ABOUT</Link>
                  </div>
                  <div>
                  <Link to="/skill" className={styles.content}>SKILL</Link>
                  </div>
                  <div>
                  <Link to="/contact" className={styles.content}>CONTACT ME</Link>
                  </div>
                </div>
        </div>
    </>
  );
};

export default Navbar;