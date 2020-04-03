import React from 'react';
import { Typography } from 'antd';
import styles from './styles.module.scss';

const { Text } = Typography;

export default function AnswerItem() {
  return (
    <div className={styles['answers__item']}>
      <Text className={styles['answers__text']}>Mexico</Text>
    </div>
  );
}
