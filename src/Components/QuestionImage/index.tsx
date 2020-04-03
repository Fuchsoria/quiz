import React from 'react';
import styles from './styles.module.scss';

export default function QuestionImage() {
  return (
    <img
      className={styles.image}
      src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      alt="city"
    />
  );
}
