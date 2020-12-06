import React from 'react';
import styles from './MemberSoundboard.css';

export default function Members(): JSX.Element {
    const click = () => {
        const audio = new Audio('audio/yubiyubi.mp3');
        audio.play();
    }
    return (
      <div className={styles.container} data-tid="members">
        <h2>Inugami Korone</h2>
        <div onClick={() => { click() }}>Yubi yubi</div>
      </div>
    );
  }