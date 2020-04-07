import React from 'react';
import AnswersList from '../AnswersList';
import Question from '../Question';
import QuestionImage from '../QuestionImage';
import { QuizProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function Quiz({ current, handleAnswer }: QuizProps) {
  const { question, questionImage, answers } = current;

  return (
    <>
      <div className={styles['content__container']}>
        <Question question={question} />
        <QuestionImage source={questionImage} />
      </div>
      <AnswersList answers={answers} handleAnswer={handleAnswer} />
    </>
  );
}
