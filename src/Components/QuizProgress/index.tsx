import React from 'react';
import { Progress } from 'antd';
// import styles from './styles.module.scss';

export default function QuizProgress() {
  return (
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={75}
    />
  );
}
