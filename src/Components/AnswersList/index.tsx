import React from 'react';
import AnswerItem from '../AnswerItem';
import { AnswersListProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function AnswersList({ answers, handleAnswer }: AnswersListProps) {
  return (
    <div className={styles.answers}>
      {answers.map(({ id, name }) => (
        <AnswerItem key={id} id={id} answer={name} handleAnswer={handleAnswer} />
      ))}
    </div>
  );
}
