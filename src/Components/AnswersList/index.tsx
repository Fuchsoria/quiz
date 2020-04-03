import React from 'react';
import AnswerItem from '../AnswerItem';
import { AnswersListProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function AnswersList({ answers }: AnswersListProps) {
  return (
    <div className={styles.answers}>
      {answers.map(({ id, name }) => (
        <AnswerItem key={id} answer={name} />
      ))}
    </div>
  );
}
