import React from 'react';
import { Breadcrumb } from 'antd';
import { QuizBreadcrumbProps } from '../../interfaces';
import styles from './styles.module.scss';

const { Item } = Breadcrumb;

export default function QuizBreadcrumb({ quizNavigation }: QuizBreadcrumbProps) {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <Item>Home</Item>
      <Item>Categories</Item>
      <Item>{quizNavigation.current}</Item>
    </Breadcrumb>
  );
}
