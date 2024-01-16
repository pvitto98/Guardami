import React, { CSSProperties } from 'react';
import styles from './Topbar.module.css';
import logo from './logo.png'
type HeaderProps = {
    onSezione1Click: () => void;
    onSezione2Click: () => void;
  };
  
  const Topbar: React.FC<HeaderProps> = ({ onSezione1Click, onSezione2Click }) => {
    return (
      <header className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.image29Wrapper}>
            <img className={styles.image29Icon} alt="" src={logo} />
          </div>
          <nav className={styles.sezione1Parent}>
            <button className={`${styles.sezione1} ${styles.topbarNavigator}`} onClick={onSezione1Click}>
              Sezione1
            </button>
            <button className={styles.sezione1} onClick={onSezione2Click}>
              Sezione2
            </button>
            <button className={styles.sezione1}>Sezione3</button>
          </nav>
        </div>
        <button className={styles.shopWrapper}>
          <b className={styles.shop}>Shop</b>
        </button>
      </header>
    );
  };
  
  export default Topbar;