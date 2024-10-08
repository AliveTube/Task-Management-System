import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>Page Not Found</h2>
      <p className={styles.errorDescription}>
        Sorry, the page you're looking for doesn't exist. It might have been removed or you might have entered an incorrect URL.
      </p>
      <Link to="/" className={styles.backHome}>Back to Home</Link>
    </div>
  );
}

export default Error;