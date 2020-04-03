import React from 'react';
import { Breadcrumb } from 'antd';
import styles from './styles.module.scss';

const { Item } = Breadcrumb;

export default function QuizBreadcrumb() {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <Item>Home</Item>
      <Item>List</Item>
      <Item>App</Item>
    </Breadcrumb>
  );
}
