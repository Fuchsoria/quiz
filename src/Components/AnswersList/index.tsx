import React from 'react';
import AnswerItem from '../AnswerItem';
import styles from './styles.module.scss';

export default function AnswersList() {
  return (
    <div className={styles.answers}>
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
    </div>
  );
}
