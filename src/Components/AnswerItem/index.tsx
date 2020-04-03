import React from 'react';
import { Typography } from 'antd';
import { AnswerProps } from '../../interfaces';
import styles from './styles.module.scss';

const { Text } = Typography;

export default function AnswerItem({ answer }: AnswerProps) {
  return (
    <div className={styles['answers__item']}>
      <Text className={styles['answers__text']}>{answer}</Text>
    </div>
  );
}
