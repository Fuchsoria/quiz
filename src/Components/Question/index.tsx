import React from 'react';
import { Typography } from 'antd';
import { QuestionProps } from '../../interfaces';
import styles from './styles.module.scss';

const { Text } = Typography;

export default function Question({ question }: QuestionProps) {
  return (
    <div className={styles.question}>
      <Text className={styles['question__text']}>{question}</Text>
    </div>
  );
}
