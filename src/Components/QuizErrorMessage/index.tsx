import React from 'react';
import { Typography } from 'antd';
import { QuizErrorMessageProps } from '../../interfaces';
import styles from './styles.module.scss';

const { Title } = Typography;

export default function QuizErrorMessage({ message }: QuizErrorMessageProps) {
  return (
    <div className={styles['quiz-error__container']}>
      <Title level={3}>{message}</Title>
    </div>
  );
}
