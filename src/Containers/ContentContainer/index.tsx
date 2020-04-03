import React from 'react';
import { Layout } from 'antd';
import AnswersList from '../../Components/AnswersList';
import Question from '../../Components/Question';
import QuestionImage from '../../Components/QuestionImage';
import QuizProgress from '../../Components/QuizProgress';
import styles from './styles.module.scss';

const { Content } = Layout;

export default function ContentContainer() {
  return (
    <Content className={styles.content}>
      <QuizProgress />
      <div className={styles['content__container']}>
        <Question />
        <QuestionImage />
      </div>
      <AnswersList />
    </Content>
  );
}
