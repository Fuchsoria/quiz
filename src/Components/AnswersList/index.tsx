import React from 'react';
import AnswerItem from '../AnswerItem';
import { AnswersListProps } from '../../interfaces';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

function AnswersList({ answers, answersStore, handleAnswer }: AnswersListProps) {
  const isDisabled = Boolean(answersStore.latestAnswer);

  return (
    <div className={styles.answers}>
      {answers.map(({ id, name }) => {
        return id === answersStore.latestAnswer ? (
          <AnswerItem
            key={id}
            id={id}
            isCorrect={answersStore.isCorrect}
            isLatest
            isDisabled={isDisabled}
            answer={name}
            handleAnswer={handleAnswer}
          />
        ) : (
          <AnswerItem key={id} id={id} answer={name} handleAnswer={handleAnswer} isDisabled={isDisabled} />
        );
      })}
    </div>
  );
}

const mapStateToProps = (store: any) => {
  const { answers } = store;

  return { answersStore: answers };
};

export default connect(mapStateToProps)(AnswersList);
