import React from 'react';
import cn from 'classnames';
import { Typography } from 'antd';
import { AnswerProps } from '../../interfaces';
import styles from './styles.module.scss';

const { Text } = Typography;

export default function AnswerItem({ answer, id, handleAnswer, isCorrect, isLatest, isDisabled }: AnswerProps) {
  const containerClassNames = isCorrect
    ? cn([styles['answers__item'], styles['answers__item_correct']])
    : cn([styles['answers__item'], styles['answers__item_incorrect']]);
  const textClassNames = isCorrect
    ? cn([styles['answers__text'], styles['answers__text_correct']])
    : cn([styles['answers__text'], styles['answers__text_incorrect']]);

  return (
    <div
      className={isLatest ? containerClassNames : styles['answers__item']}
      onClick={isDisabled ? undefined : handleAnswer(id)}
    >
      <Text className={isLatest ? textClassNames : styles['answers__text']}>{answer}</Text>
    </div>
  );
}
