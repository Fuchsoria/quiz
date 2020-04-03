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
      <QuizProgress done={1} max={10} />
      <div className={styles['content__container']}>
        <Question question={'In which country is this city located?'} />
        <QuestionImage
          source={
            'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
          }
        />
      </div>
      <AnswersList
        answers={[
          { id: 'FG4Hj3R7d3VB', name: 'Mexico' },
          { id: 'FG4fghfg3VB', name: 'Brazil' },
          { id: 'FGrrty7d3VB', name: 'Japan' },
          { id: 'FG4HjklklsB', name: 'USA' }
        ]}
      />
    </Content>
  );
}
