import React from 'react';
import { Typography } from 'antd';
import styles from './styles.module.scss';

const { Text } = Typography;

export default function Question() {
  return (
    <div className={styles.question}>
      <Text className={styles['question__text']}>In which country is this city located?</Text>
    </div>
  );
}
