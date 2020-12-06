import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import styles from './Members.css';

export default function Members(): JSX.Element {
  return (
    <div className={styles.container} data-tid="members">
      <h2>MEMBERS</h2>
      <Link to={'/member/inugami-korone'}>Inugami Korone</Link>
    </div>
  );
}
