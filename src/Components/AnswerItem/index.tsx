import React from 'react';
import { Typography } from 'antd';
import { AnswerProps } from '../../interfaces';
import styles from './styles.module.scss';

const { Text } = Typography;

export default function AnswerItem({ answer, id, handleAnswer }: AnswerProps) {
  return (
    <div className={styles['answers__item']} onClick={handleAnswer(id)}>
      <Text className={styles['answers__text']}>{answer}</Text>
    </div>
  );
}
