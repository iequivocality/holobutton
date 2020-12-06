import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Welcome to Holobutton!</h2>
      <Link to={routes.MEMBERS}>Go to Members</Link>
      <h4>Built by ambidere</h4>
    </div>
  );
}
