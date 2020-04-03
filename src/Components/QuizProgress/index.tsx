import React from 'react';
import { QuizProgressProps } from '../../interfaces';
import { Progress } from 'antd';
// import styles from './styles.module.scss';

export default function QuizProgress({ done, max }: QuizProgressProps) {
  const percent = (done * 100) / max;

  return (
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={percent}
    />
  );
}
